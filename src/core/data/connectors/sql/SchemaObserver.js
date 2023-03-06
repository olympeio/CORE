import {Knex} from "knex";
import {
    Query, CloudObject, Direction, RelationModel, PropertyModel, QuerySingle,
    StringModel, NumberModel, BooleanModel, DatetimeModel, ColorModel, DBView
} from 'olympe';
import {COLUMNS} from "./SQLQueryExecutor";
import {QUERY_COLUMNS, QUERY_DATA_TYPE_TABLES, QUERY_RELATION_TABLES, SCHEMA_PREFIXES} from "./_statics";

export default class SchemaObserver {

    /**
     * @param {!log.Logger} logger
     */
    constructor(logger) {

        /**
         * @private
         * @type {!log.Logger}
         */
        this.logger = logger;

        /**
         * @private
         * @type {string}
         */
        this.schema = '';

        /**
         * @private
         * @type {!DBView}
         */
        this.db = DBView.get();

        /**
         * @private
         * @type {Knex}
         */
        this.knex = null;

        /**
         * @private
         * @type {!Map<string, string>}
         */
        this.tableFromTags = new Map();

        /**
         * @private
         * @type {!Map<string, Table>}
         */
        this.tables = new Map();

        /**
         * @private
         * @type {!Array<function()>}
         */
        this.onReady = [];

        /**
         * @private
         * @type {!Array<function()>}
         */
        this.operationStack = [];
    }

    /**
     * @param {!Knex} client
     * @param {string} schema
     * @return {!Promise<void>}
     */
    init(client, schema) {
        this.knex = client;
        this.schema = schema;

        // What to apply on the schema for the tables to consider:
        const tableModifier = async (currentName, finalName, finalTag) => {
            // Update the schema if necessary
            if (currentName !== finalName) {
                await client.schema.withSchema(schema).renameTable(currentName, finalName);
            }

            const table = new Table(this.logger, finalName, finalTag);
            await table.checkColumns(client, schema);
            this.tables.set(finalName, table);
            this.tableFromTags.set(finalTag, finalName);
        };

        /**
         * @param {string} sql
         * @return {Promise<[string, string][]>}
         */
        const queryTables = async (sql) => (await client.raw(sql, [schema]))?.rows?.map((r) => [r.name, r.comment]) ?? [];

        // Initialize and validate the schema according to the data model.
        this.pushOperation(async () => {
            // List of data types tables from the database
            const dataTypeTables = await queryTables(QUERY_DATA_TYPE_TABLES);

            // If no data type table, means that we are probably trying to migration to the new sql connector format.
            if (dataTypeTables.length === 0) {
                return;
            }

            // Validate the schema of data type tables.
            await SchemaObserver.validateSchema(this.logger, SCHEMA_PREFIXES.TYPE, dataTypeTables, tableModifier);

            // List of relation tables from the database
            const relationTables = await queryTables(QUERY_RELATION_TABLES);
            return SchemaObserver.validateRelationSchema(this.logger, relationTables, tableModifier);
        }, 'Initialize schema observer');

        return this.waitForFree();
    }

    /**
     * @return {!Promise<void>}
     */
    waitForFree() {
        return new Promise((resolve) => {
            this.operationStack.length > 0 ? this.onReady.push(() => resolve()) : resolve();
        });
    }

    /**
     * @private
     * @param {function():Promise<void>} operation
     * @param {string} debugName
     */
    pushOperation(operation, debugName) {
        this.logger.debug(`Push operation: ${debugName}`);

        const stack = this.operationStack;
        const callNext = () => {
            stack.shift();
            if (stack.length === 0) {
                this.logger.debug('Schema observer is free');
                while (this.onReady.length > 0) {
                    this.onReady.shift()();
                }
            } else {
                stack[0]();
            }
        };

        const boundOperation = () => {
            operation().then(() => {
                this.logger.debug(`Operation ${debugName} succeed`);
                callNext();
            }).catch((r) => {
                throw new Error(`Error with schema operation ${debugName}: ${r}`);
            });
        };

        stack.push(boundOperation);
        if (stack.length === 1) {
            this.logger.debug('Schema observer is busy');
            boundOperation();
        }
    }

    /**
     * @return {string}
     */
    getSchema() {
        return this.schema;
    }

    /**
     * @param {!Tag} dataType
     * @param {boolean=} includeInheritance
     * @return {string[]}
     */
    getTablesOfType(dataType, includeInheritance = true) {
        let query = Query.from(dataType);
        if (includeInheritance) {
            query = query.followRecursively(CloudObject.extendedByRel, true);
        }
        return query.executeFromCache()
            .map((model) => this.tableFromTags.get(model.getTag()) ?? null)
            .filter((v) => v !== null);
    }

    /**
     * @param {...string} tableNames
     * @return {Generator<[string, string]>}
     */
    getAllColumns(...tableNames) {
        return (function* (tables, names) {
            for (const name of names) {
                yield* tables.get(name)?.getColumns() ?? [];
            }
        }(this.tables, tableNames));
    }

    /**
     * @param {string} table
     * @return {?string}
     */
    getTableTag(table) {
        return this.tables.get(table)?.getTag() ?? null;
    }

    /**
     * @param {string[]} fromTables
     * @param {!Relation} relation
     * @return {[string, string, string][]}
     */
    getRelationTables(fromTables, relation) {
        const toOrigin = relation.getDirection() === Direction.ORIGIN;
        const fromModelRel = toOrigin ? RelationModel.destinationModelRel : RelationModel.originModelRel;
        const toModelRel = toOrigin ? RelationModel.originModelRel : RelationModel.destinationModelRel;
        const fromModels = Query.from(relation).follow(fromModelRel).followRecursively(CloudObject.extendedByRel, true).executeFromCache();

        const toModel = QuerySingle.from(relation).follow(toModelRel).executeFromCache();
        const toModelTableNames = toModel !== null ? this.getTablesOfType(/** @type {!Tag} */ (toModel)) : [];
        const relationName = this.db.name(relation);

        const result = [];
        for (const fromTableName of fromTables) {
            const fromTable = this.tables.get(fromTableName);
            // Only do something if the specified table does extend the origin model of the relation
            if (fromTable && fromModels.has(fromTable.getTag())) {
                const fromName = this.db.name(fromTable);
                toModelTableNames.forEach((toTableName) => {
                    const toName = this.db.name(this.getTableTag(toTableName));
                    const relTableName = toOrigin
                        ? SchemaObserver.getSQLRelationName(toName, relationName, fromName, relation.getTag())
                        : SchemaObserver.getSQLRelationName(fromName, relationName, toName, relation.getTag());
                    if (this.tables.has(relTableName)) {
                        result.push([fromTableName, relTableName, toTableName]);
                    }
                });
            }
        }
        return result;
    }

    /**
     * @param {string} dataType
     * @param {string[]} properties
     * @return {string}
     */
    ensureDataType(dataType, properties) {
        const tableName = this.tableFromTags.get(dataType) ?? SchemaObserver.toSQLName(this.db.name(dataType), dataType);
        const table = this.tables.get(tableName) ?? new Table(this.logger, tableName, dataType);
        // Create the table if it does not exist yet
        if (!this.tables.has(tableName)) {
            this.tables.set(tableName, table);
            this.tableFromTags.set(dataType, tableName);
            this.pushOperation(
                () => table.create(this.getSchemaBuilder()),
                `Create new table for tag ${dataType}, with name ${tableName}`
            );
        }

        // Ensure all the required columns exist for properties.
        this.pushOperation(
            () => table.ensureColumns(this.getSchemaBuilder(), properties),
            `Ensure properties columns exists for ${dataType}`
        );
        return tableName;
    }

    /**
     * @param {string} relationTag
     * @param {string} fromTag
     * @param {string} toTag
     * @return {string}
     */
    ensureRelation(relationTag, fromTag, toTag) {
        const globalTag = `${fromTag}:${relationTag}:${toTag}`;
        const tableName = this.tableFromTags.get(globalTag)
            ?? SchemaObserver.getSQLRelationName(this.db.name(fromTag), this.db.name(relationTag), this.db.name(toTag), relationTag);

        if (!this.tables.has(tableName)) {
            const table = new Table(this.logger, tableName, globalTag);
            this.tables.set(tableName, table);
            this.tableFromTags.set(globalTag, tableName);
            this.pushOperation(() => {
                const from = `${this.schema}.${this.tableFromTags.get(fromTag)}`;
                const to = `${this.schema}.${this.tableFromTags.get(toTag)}`;
                return table.createRelation(this.getSchemaBuilder(), from, to);
            }, `Ensure relation table exists for ${fromTag}-[${relationTag}]->${toTag}`);
        }
        return tableName;
    }

    /**
     * @param {string} dataType
     * @return {?string}
     */
    getTable(dataType) {
        return this.tableFromTags.get(dataType) ?? null;
    }

    /**
     * @param {string} table
     * @param {string} property
     * @return {?string}
     */
    getColumn(table, property) {
        return this.tables.get(table)?.getColumn(property) ?? null;
    }

    /**
     * @param {string} relationTag
     * @param {string} fromTag
     * @param {string} toTag
     * @return {?string}
     */
    getRelationTable(relationTag, fromTag, toTag) {
        const globalTag = `${fromTag}:${relationTag}:${toTag}`;
        return this.tableFromTags.get(globalTag) ?? null;
    }

    /**
     * @private
     * @return {!Knex.SchemaBuilder}
     */
    getSchemaBuilder() {
        return this.knex.schema.withSchema(this.schema);
    }

    /**
     * @private
     * @param {string} from
     * @param {string} rel
     * @param {string} to
     * @param {string} relTag
     * @param {number=} max
     * @return {string}
     */
    static getSQLRelationName(from, rel, to, relTag, max = 59) {
        const tagLength = Math.min(10, relTag.length);
        const subMax = Math.floor((max - tagLength - 3) / 3);
        return `${this.toSQLName(from, '', subMax)}_${this.toSQLName(rel, '', subMax)}_${this.toSQLName(to, '', subMax)}_${relTag.slice(-tagLength)}`;
    }

    /**
     * @param {string} name
     * @param {string} tag
     * @param {number=} max
     */
    static toSQLName(name, tag, max = 59) {
        const tagLength = Math.min(10, tag.length);
        // Ensure the name do not start by a digit and does not contain non-word characters.
        const candidate = name.replace(/^\d|\W/g, '_').substring(0, max - 1 - tagLength);
        return tagLength > 0 ? candidate.concat('_', tag.slice(-tagLength)) : candidate;
    }

    /**
     *
     * @param {log.Logger} logger
     * @param {[string, string][]} relationTables
     * @param {function(string, string, string):Promise<void>} modifier
     * @return {!Promise<void>}
     */
    static validateRelationSchema(logger, relationTables, modifier) {
        const db = DBView.get();
        const promises = [];

        for (const [name, comment] of relationTables) {
            const [fromTag, relTag, toTag] = typeof comment === 'string' ? comment.split(':').slice(1): [];

            // If relation tag is valid, compute the new name to ensure it is updated
            if (typeof relTag === 'string' && db.exist(fromTag) && db.instanceOf(relTag, RelationModel) && db.exist(toTag)) {
                const finalTags = `${fromTag}:${relTag}:${toTag}`;
                const finalName = SchemaObserver.getSQLRelationName(db.name(fromTag), db.name(relTag), db.name(toTag), relTag);
                promises.push(modifier(name, finalName, finalTags));
            } else {
                // Otherwise, ignore the table.
                logger.warn(`No match has been found for Relation Table ${name} (${fromTag} -[${relTag}]-> ${toTag}) in the data model, ignore that table.`);
            }
        }

        return Promise.all(promises);
    }

    /**
     * @param {!log.Logger} logger
     * @param {string} schemaType
     * @param {[string, string][]} currentSchema
     * @param {function(string, string, string):Promise<void>} modifier
     * @return {!Promise<void>}
     */
    static validateSchema(logger, schemaType, currentSchema, modifier) {
        const db = DBView.get();
        const promises = [];

        for (const [name, comment] of currentSchema) {
            const tag = typeof comment === 'string' && comment.split(':')[1];

            // If tag is valid, compute the new name to ensure it is updated
            if (typeof tag === 'string' && (schemaType === SCHEMA_PREFIXES.PROPERTY ? db.instanceOf(tag, PropertyModel) : db.exist(tag))) {
                const finalName = SchemaObserver.toSQLName(db.name(tag), tag);
                promises.push(modifier(name, finalName, tag));
            } else {
                // Otherwise, ignore the table/column
                logger.warn(`No match has been found for ${schemaType === SCHEMA_PREFIXES.TYPE ? 'Table' : 'Column'} ${name} (tag: ${tag}) in the data model, ignore that element.`);
            }
        }

        return Promise.all(promises);
    }

    /**
     * @param {!log.Logger} logger
     * @param {string} schemaType
     * @param {[string, string][]} currentSchema
     * @param {!QueryResult<CloudObject>} validDataTypes
     * @param {function(string, string, string, string):Promise<void>} modifier
     * @return {!Promise<void>}
     */
    static migrateSchema(logger, schemaType, currentSchema, validDataTypes, modifier) {
        const db = DBView.get();
        let recoveryMap = null;
        const promises = [];

        for (const [name, comment] of currentSchema) {
            let finalName = null, finalTag = null;
            const tag = typeof comment === 'string' && comment.split(':')[1];

            // 1. If tag is valid, compute the new name to ensure it is updated
            if (typeof tag === 'string' && db.exist(tag)) {
                finalTag = tag;
                finalName = SchemaObserver.toSQLName(db.name(tag), tag);
            }

            // 2. Otherwise, try to recover the right model based on the name, which could either be a tag or a formatted name of a model.
            else {
                // 2.a. build the recovery map if it does not exist yet.
                if (recoveryMap === null) {
                    recoveryMap = validDataTypes.reduce((map , model) => map.set(model.getTag(), model), new Map());
                }

                // 2.b. try to find a candidate model
                if (recoveryMap.has(name)) {
                    const recoveredModel = recoveryMap.get(name);
                    recoveryMap.delete(name); // Avoid to reuse a model multiple times.
                    const modelName = recoveredModel.name();
                    finalTag = recoveredModel.getTag();
                    finalName = SchemaObserver.toSQLName(modelName, finalTag);
                    logger.info(`${schemaType === SCHEMA_PREFIXES.TYPE ? 'Table' : 'Column'} ${name} (tag: ${tag}) has been matched with model ${modelName} (tag: ${finalTag}) and will be updated`);
                }
            }

            if (finalName !== null && finalTag !== null) {
                promises.push(modifier(name, tag, /** @type {string} */ (finalName), /** @type {string} */ (finalTag)));
            } else {
                logger.warn(`No match has been found for ${schemaType === SCHEMA_PREFIXES.TYPE ? 'Table' : 'Column'} ${name} (tag: ${tag}) in the data model, ignore that element.`);
            }
        }

        return Promise.all(promises);
    }
}

class Table {

    /**
     * @param {!log.Logger} logger
     * @param {string} name
     * @param {string} tag
     */
    constructor(logger, name, tag) {

        /**
         * @private
         * @type {!log.Logger}
         */
        this.logger = logger;

        /**
         * @private
         * @type {!DBView}
         */
        this.db = DBView.get();

        /**
         * @private
         * @type {string}
         */
        this.name = name;

        /**
         * @private
         * @type {string}
         */
        this.tag = tag;

        /**
         * @private
         * @type {!Map<string, string>}
         */
        this.columns = new Map();
    }

    /**
     * @param {!Knex.SchemaBuilder} builder
     * @return {!Promise<Table>} this
     */
    async create(builder) {
        await builder.createTable(this.name, (tableBuilder) => {
            tableBuilder.comment(`${SCHEMA_PREFIXES.TYPE}:${this.tag}`);

            tableBuilder.string(COLUMNS.TAG, 21)
                .primary()
                .comment(`${SCHEMA_PREFIXES.PROPERTY}:${COLUMNS.TAG}`);
        });
        this.columns.set(COLUMNS.TAG, COLUMNS.TAG);
    }

    /**
     * @param {!Knex.SchemaBuilder} builder
     * @param {string[]} columnNames
     * @return {!Promise<void>}
     */
    async ensureColumns(builder, columnNames) {
        const columnsToCreate = columnNames.filter((col) => !this.columns.has(col));
        if (columnsToCreate.length === 0) {
            return;
        }

        await builder.table(this.name, (tableBuilder) => {
            columnsToCreate.forEach((columnTag) => {
                // Primitive types are: string, number, boolean, date, color
                const columnName = SchemaObserver.toSQLName(this.db.name(columnTag), columnTag);
                const comment = `${SCHEMA_PREFIXES.PROPERTY}:${columnTag}`
                this.columns.set(columnTag, columnName);
                const type = /** @type {!olympe.dc.CloudObject} */ (QuerySingle.from(columnTag).follow(PropertyModel.typeRel).executeFromCache());
                if (this.db.isExtending(type, StringModel)) { // this also takes care of enums
                    tableBuilder.text(columnName).comment(comment);
                } else if (this.db.isExtending(type, NumberModel)) {
                    tableBuilder.double(columnName).comment(comment);
                } else if (this.db.isExtending(type, BooleanModel)) {
                    tableBuilder.boolean(columnName).comment(comment);
                } else if (this.db.isExtending(type, DatetimeModel)) {
                    tableBuilder.datetime(columnName).comment(comment);
                } else if (this.db.isExtending(type, ColorModel)) {
                    tableBuilder.string(columnName, 50).comment(comment);
                }
            });
        });
    }

    /**
     * @param {!Knex.SchemaBuilder} builder
     * @param {string} fromName
     * @param {string} toName
     * @return {!Promise<void>}
     */
    async createRelation(builder, fromName, toName) {
        await builder.createTable(this.name, (tableBuilder) => {
            tableBuilder.string(COLUMNS.FROM, 21)
                .notNullable()
                .references(COLUMNS.TAG)
                .inTable(fromName)
                .onDelete('CASCADE')
                .onUpdate('RESTRICT')
                .comment(`${SCHEMA_PREFIXES.PROPERTY}:${COLUMNS.FROM}`);

            tableBuilder.string(COLUMNS.TO, 21)
                .notNullable()
                .references(COLUMNS.TAG)
                .inTable(toName)
                .onDelete('CASCADE')
                .onUpdate('RESTRICT')
                .comment(`${SCHEMA_PREFIXES.PROPERTY}:${COLUMNS.TO}`);

            tableBuilder
                .primary([COLUMNS.FROM, COLUMNS.TO])
                .comment(`${SCHEMA_PREFIXES.RELATION}:${this.tag}`);
        });
        this.columns.set(COLUMNS.FROM, COLUMNS.FROM).set(COLUMNS.TO, COLUMNS.TO);
    }

    /**
     * @param {!Knex} client
     * @param {string} schema
     * @return {!Promise<Table>} this
     */
    async checkColumns(client, schema) {
        const hardcodedColumns = new Set(Object.values(COLUMNS));
        // List of columns (pairs of column name and column comments) to be validated.
        const rawColumns = await client.raw(QUERY_COLUMNS, [schema, this.name]);
        const columnsList = rawColumns?.rows?.map((row) => [row.name, row.comment]).filter(([name]) => {
            if (hardcodedColumns.has(name)) {
                this.columns.set(name, name);
                return false;
            }
            return true;
        }) ?? [];

        // What to apply on the schema when the name is not correct.
        const modifier = async (currentColName, finalColName, finalColTag) => {
            this.columns.set(finalColTag, finalColName);
            if (finalColName !== currentColName) {
                await client.schema.withSchema(schema).alterTable(this.name, (table) => {
                    table.renameColumn(currentColName, finalColName);
                });
            }
        };

        // Execute the schema validation according to what has been found in the database.
        await SchemaObserver.validateSchema(this.logger, SCHEMA_PREFIXES.PROPERTY, columnsList, modifier);

        return this;
    }

    /**
     * @return {string}
     */
    getTag() {
        return this.tag;
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name;
    }

    /**
     * @return {Iterable<[string, string]>}
     */
    getColumns() {
        return this.columns.entries();
    }

    /**
     * @param {string} property
     * @return {string | undefined}
     */
    getColumn(property) {
        return this.columns.get(property);
    }
}
