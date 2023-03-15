import {Knex} from "knex";
import {
    Query, CloudObject, Direction, RelationModel, PropertyModel, QuerySingle,
    StringModel, NumberModel, BooleanModel, DatetimeModel, ColorModel, DBView, tagToString, File as OFile
} from 'olympe';
import {COLUMNS} from "./SQLQueryExecutor";
import {
    QUERY_ALL_COLUMNS,
    QUERY_ALL_TABLES,
    QUERY_COLUMNS,
    QUERY_DATA_TYPE_TABLES,
    QUERY_RELATION_TABLES,
    REMOVE_DUPLICATES,
    SCHEMA_PREFIXES
} from './_statics';

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
                const allTables = await queryTables(QUERY_ALL_TABLES);
                await this.migrate(allTables.map(([tableName]) => tableName));
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

        if (!table.hasAllColumns(properties)) {
            // Ensure all the required columns exist for properties.
            this.pushOperation(
                () => table.ensureColumns(this.getSchemaBuilder(), properties),
                `Ensure properties columns exists for ${dataType}`
            );
        }
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

        this.ensureDataType(fromTag, []);
        this.ensureDataType(toTag, []);

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
     * Migrate the list of given tables to the new format, considering that the name of tables is a tag.
     *
     * @private
     * @param {!Array<string>} tableNameList
     * @return {!Promise<void>}
     */
    async migrate(tableNameList) {
        const dataTypeOperations = [], relationOperations = [];
        for (const name of tableNameList) {
            if (this.db.exist(name)) {
                const tag = name;
                // the name exists => the table name is a tag and needs migration
                if (this.db.instanceOf(tag, RelationModel)) {
                    // Migration of tables having a tag of a relation.
                    const fromTag = QuerySingle.from(tag).follow(RelationModel.originModelRel).executeFromCache()?.getTag();
                    const toTag = QuerySingle.from(tag).follow(RelationModel.destinationModelRel).executeFromCache()?.getTag();
                    if (!fromTag || !toTag) {
                        throw new Error(`Missing from (${fromTag}) or to (${toTag}) to migrate the relation table ${tag}.`);
                    }
                    relationOperations.push(() => this.migrateRelation(tag, fromTag, toTag));
                } else {
                    // tag is a name of DB table, tag is not a relation => tag is a data type
                    const rawColumns = (await this.knex.raw(QUERY_ALL_COLUMNS, [this.schema, name]))?.rows?.map((r) => r.name)
                    dataTypeOperations.push(() => this.migrateDataType(tag, rawColumns));
                }
            }
        }

        dataTypeOperations.forEach((op) => op()); // First migrate data types
        relationOperations.forEach((op) => op()); // Then relations (for foreign keys)
    }

    /**
     * Migrate the specified table that represents a relation table to the new format.
     *
     * @private
     * @param {string} relationTag
     * @param {string} fromTag
     * @param {string} toTag
     */
    migrateRelation(relationTag, fromTag, toTag) {
        this.logger.info(`[MIGRATION] migrating relation table (${fromTag})->[${relationTag}]->(${toTag})`);
        const globalTag = `${fromTag}:${relationTag}:${toTag}`;
        const tableName = this.tableFromTags.get(globalTag)
            ?? SchemaObserver.getSQLRelationName(this.db.name(fromTag), this.db.name(relationTag), this.db.name(toTag), relationTag);

        if (!this.tables.has(tableName)) {
            const table = new Table(this.logger, tableName, globalTag);
            this.tables.set(tableName, table);
            this.tableFromTags.set(globalTag, tableName);

            this.pushOperation(async () => {
                await this.getSchemaBuilder().alterTable(relationTag, (builder) => {
                    builder.dropForeign(COLUMNS.FROM).dropForeign(COLUMNS.TO)
                        .dropNullable(COLUMNS.FROM).dropNullable(COLUMNS.TO);
                });
            }, `[MIGRATION] Remove previous foreign keys constraints for relation table ${relationTag}`);

            this.pushOperation(
                () => this.getSchemaBuilder().renameTable(relationTag, tableName),
                `[MIGRATION] Renaming relation table ${relationTag} to ${tableName}`
            );

            // remove duplicates in relation tables
            this.pushOperation(
                () => this.knex.raw(REMOVE_DUPLICATES, [this.schema, tableName, this.schema, tableName]),
                `[MIGRATION] Remove duplicates from relation table ${tableName}`
            );

            // Ensure update of FROM and TO columns + comment on the table
            const fromTable = SchemaObserver.toSQLName(this.db.name(fromTag), fromTag);
            const toTable = SchemaObserver.toSQLName(this.db.name(toTag), toTag);
            this.pushOperation(
                () => table.migrateRelationColumns(this.getSchemaBuilder(), tableName, fromTable, toTable, this.schema),
                `[MIGRATION] Update columns of relation table ${tableName} to add foreign keys and comments`
            );
        }
    }

    /**
     * Migrate a data type table and its columns
     *
     * @private
     * @param {string} dataType the tag of the data type
     * @param {!Array<string>} columnNames list of columns that exist. Should correspond to a tag of a property
     */
    migrateDataType(dataType, columnNames) {
        // Discriminate file model tag that changed with data source integration
        const newDataType = dataType === 'ff021000000000000030' ? tagToString(OFile) : dataType;
        const tableName = this.tableFromTags.get(newDataType) ?? SchemaObserver.toSQLName(this.db.name(newDataType), newDataType);
        const table = this.tables.get(tableName) ?? new Table(this.logger, tableName, newDataType);

        if (!this.tables.has(tableName)) {
            this.tables.set(tableName, table);
            this.tableFromTags.set(newDataType, tableName);

            this.pushOperation(
                () => this.getSchemaBuilder().renameTable(dataType, tableName),
                `[MIGRATION] Rename table for data type ${dataType} to ${tableName}`
            );

            const comment = `${SCHEMA_PREFIXES.TYPE}:${newDataType}`;
            this.pushOperation(
                () => this.getSchemaBuilder().table(tableName, (builder) => builder.comment(comment)),
                `[MIGRATION] Add a comment ${comment} for table ${tableName}`
            );

            const hardcodedColumns = [COLUMNS.TAG, COLUMNS.FILE_CONTENT];
            for (const columnName of columnNames) {
                if (hardcodedColumns.includes(columnName) || this.db.instanceOf(columnName, PropertyModel)) {
                    this.pushOperation(
                        () => table.migratePropertyColumn(this.getSchemaBuilder(), columnName),
                        `[MIGRATION] column ${columnName} for data type ${newDataType} and table name ${tableName}`
                    );
                }
            }
        }
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
     * Change a column from the old postgreSQL connector to data source name conventions
     *
     * @param {!Knex.SchemaBuilder} builder
     * @param {string} columnTag
     * @return {!Promise<void>}
     */
    async migratePropertyColumn(builder, columnTag) {
        const hardcodedTags = Array.from(Object.values(COLUMNS));
        await builder.alterTable(this.name, (tableBuilder) => {
            const comment = `${SCHEMA_PREFIXES.PROPERTY}:${columnTag}`

            // Exception for hardcoded columns: tags, and file content (binary content of files)
            if (hardcodedTags.includes(columnTag)) {
                this.columns.set(columnTag, columnTag);

                if (columnTag === COLUMNS.FILE_CONTENT) {
                    tableBuilder.binary(columnTag).comment(comment).alter({alterNullable: false});
                } else {
                    tableBuilder.string(columnTag, 21).comment(comment).alter({alterNullable: false});
                }
                return;
            }

            // For any other type: set the comment and migrate date-times
            const type = QuerySingle.from(columnTag).follow(PropertyModel.typeRel).executeFromCache()?.getTag();
            if (this.db.isExtending(type, StringModel)) { // this also takes care of enums
                // Set text type instead of string
                tableBuilder.text(columnTag).comment(comment).alter({alterNullable: false, alterType: true});
            } else if (this.db.isExtending(type, NumberModel)) {
                tableBuilder.double(columnTag).comment(comment).alter({alterNullable: false, alterType: false});
            } else if (this.db.isExtending(type, BooleanModel)) {
                tableBuilder.boolean(columnTag).comment(comment).alter({alterNullable: false, alterType: false});
            } else if (this.db.isExtending(type, DatetimeModel)) {
                // Change the type to date time.
                tableBuilder.datetime(columnTag).comment(comment).alter({alterNullable: false, alterType: true});
            } else if (this.db.isExtending(type, ColorModel)) {
                tableBuilder.string(columnTag, 50).comment(comment).alter({alterNullable: false, alterType: false});
            }

            // Finally rename the column
            const columnName = SchemaObserver.toSQLName(this.db.name(columnTag), columnTag);
            this.columns.set(columnTag, columnName);
            tableBuilder.renameColumn(columnTag, columnName);
        });
    }

    /**
     * @param {!Knex.SchemaBuilder} builder
     * @param {string} tableName
     * @param {string} fromTable
     * @param {string} toTable
     * @param {string} schema
     * @return {Promise<void>}
     */
    async migrateRelationColumns(builder, tableName, fromTable, toTable, schema) {
        await builder.alterTable(tableName, (builder) => {
            builder.string(COLUMNS.FROM, 21).alter()
                .notNullable()
                .references(COLUMNS.TAG)
                .inTable(`${schema}.${fromTable}`)
                .onDelete('CASCADE')
                .onUpdate('RESTRICT')
                .comment(`${SCHEMA_PREFIXES.PROPERTY}:${COLUMNS.FROM}`);

            builder.string(COLUMNS.TO, 21).alter()
                .notNullable()
                .references(COLUMNS.TAG)
                .inTable(`${schema}.${toTable}`)
                .onDelete('CASCADE')
                .onUpdate('RESTRICT')
                .comment(`${SCHEMA_PREFIXES.PROPERTY}:${COLUMNS.TO}`);

            builder.primary([COLUMNS.FROM, COLUMNS.TO]).comment(`${SCHEMA_PREFIXES.RELATION}:${this.tag}`);
            this.columns.set(COLUMNS.FROM, COLUMNS.FROM).set(COLUMNS.TO, COLUMNS.TO);
        });
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
                const comment = `${SCHEMA_PREFIXES.PROPERTY}:${columnTag}`

                // Exception for file content (binary content of files)
                if (columnTag === COLUMNS.FILE_CONTENT) {
                    tableBuilder.binary(columnTag).comment(comment);
                    this.columns.set(columnTag, columnTag);
                    return;
                }

                // Primitive types are: string, number, boolean, date, color
                const columnName = SchemaObserver.toSQLName(this.db.name(columnTag), columnTag);
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
     * @package
     * @param {!Array<string>} properties
     */
    hasAllColumns(properties) {
        return properties.every((p) => this.columns.has(p));
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
