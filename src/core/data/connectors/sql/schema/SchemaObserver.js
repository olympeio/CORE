import {Knex} from "knex";
import {
    Query,
    CloudObject,
    Direction,
    RelationModel,
    PropertyModel,
    QuerySingle,
    StringModel,
    NumberModel,
    BooleanModel,
    DatetimeModel,
    ColorModel,
    DBView,
    tagToString,
    File as OFile,
    Context,
    Predicate
} from 'olympe';
import {COLUMNS} from "../SQLQueryExecutor";
import {PG, SCHEMA_PREFIXES, MAX_NAME_LENGTH} from '../_statics';
import SchemaProvider from './SchemaProvider';

/**
 * @implements {SchemaProvider}
 */
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
         * @type {Context}
         */
        this.context = null;

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
         * @type {!Map<string, Table>}
         */
        this.tables = new Map();

        /**
         * @private
         * @type {!Map<string, string>}
         */
        this.tableNames = new Map();

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
     * @override
     * @inheritDoc
     */
    init(client, schema, context) {
        this.knex = client;
        this.schema = schema;
        this.context = context;

        // What to apply on the schema for the tables to consider:
        const tableModifier = async (currentName, finalName, finalTag) => {
            // Update the schema if necessary
            if (currentName !== finalName) {
                await client.schema.withSchema(schema).renameTable(currentName, finalName);
            }

            const table = new Table(this.logger, finalTag, finalName);
            await table.checkColumns(client, schema);
            this.tables.set(finalTag, table);
            this.tableNames.set(finalName, finalTag);
        };

        /**
         * @param {string} sql
         * @return {Promise<[string, string][]>}
         */
        const queryTables = async (sql) => (await client.raw(sql, [schema]))?.rows?.map((r) => [r.name, r.comment]) ?? [];

        // Initialize and validate the schema according to the data model.
        this.pushOperation(async () => {
            // List of data types tables from the database
            const dataTypeTables = await queryTables(PG.QUERY_DATA_TYPE_TABLES);
            this.logger.debug(`Found ${dataTypeTables.length} data type tables to be validated.`);

            // If no data type table, means that we are probably trying to migration to the new sql connector format.
            if (dataTypeTables.length === 0) {
                const allTables = await queryTables(PG.QUERY_ALL_TABLES);
                this.logger.debug(`No data type table, try a migration on ${allTables.length} tables`);
                await this.migrate(allTables.map(([tableName]) => tableName));
                return;
            }

            // Validate the schema of data type tables.
            await SchemaObserver.validateSchema(this.logger, SCHEMA_PREFIXES.TYPE, dataTypeTables, tableModifier);

            // List of relation tables from the database
            const relationTables = await queryTables(PG.QUERY_RELATION_TABLES);
            this.logger.debug(`Found ${relationTables.length} relation tables to be validated.`);
            return SchemaObserver.validateRelationSchema(this.logger, relationTables, tableModifier);
        }, 'Initialize schema observer');

        return this.waitForFree();
    }

    /**
     * @override
     * @inheritDoc
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
     * @override
     * @inheritDoc
     */
    getSchema() {
        return this.schema;
    }

    /**
     * @override
     * @inheritDoc
     */
    getTablesOfType(dataType, includeInheritance = true) {
        let query = Query.from(dataType);
        if (includeInheritance) {
            query = query.followRecursively(CloudObject.extendedByRel, true);
        }
        return query.executeFromCache().map((model) => {
            let tableName = null;
            try {
                tableName = this.tables.get(model.getTag())?.getName() ?? null;
            } catch(e) {
                this.logger.warn(`Try to get the name of a table not fully initialized yet, for data type ${dataType}.`);
            }
            return tableName;
        }).filter((v) => v !== null);
    }

    /**
     * @override
     * @inheritDoc
     */
    getAllColumns(...tableNames) {
        return (function* (tables, tableNames, names) {
            for (const name of names) {
                for (const entry of tables.get(tableNames.get(name))?.getColumns() ?? []) {
                    // Do not consider the File Content column (with blob). Only use it for upload/download operations.
                    if (entry[0] !== COLUMNS.FILE_CONTENT) {
                        yield entry;
                    }
                }
            }
        }(this.tables, this.tableNames, tableNames));
    }

    /**
     * @override
     * @inheritDoc
     */
    getColumn(table, property) {
        return this.tables.get(this.tableNames.get(table))?.getColumn(property) ?? null;
    }

    /**
     * @override
     * @inheritDoc
     */
    getTableTag(table) {
        return this.tableNames.get(table) ?? null;
    }

    /**
     * @override
     * @inheritDoc
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
            const fromTableTag = this.getTableTag(fromTableName);
            // Only do something if the specified table does extend the origin model of the relation
            if (fromModels.has(fromTableTag)) {
                const fromName = this.db.name(fromTableTag);
                toModelTableNames.forEach((toTableName) => {
                    const toTableTag = this.getTableTag(toTableName);
                    const toName = this.db.name(toTableTag);
                    const relGlobalTag = toOrigin
                        ? SchemaProvider.getRelGlobalTag(toTableTag, fromTableTag, relation.getTag())
                        : SchemaProvider.getRelGlobalTag(fromTableTag, toTableTag, relation.getTag())
                    const relTableName = toOrigin
                        ? SchemaProvider.relationTranslationToODBName(toName, relationName, fromName, relGlobalTag)
                        : SchemaProvider.relationTranslationToODBName(fromName, relationName, toName, relGlobalTag);
                    if (this.tableNames.has(relTableName)) {
                        result.push([fromTableName, relTableName, toTableName]);
                    }
                });
            }
        }
        return result;
    }

    /**
     * @override
     * @inheritDoc
     */
    ensureDataType(dataType, properties) {
        const table = this.getTableForDataType(dataType);

        // Create the table if it does not exist yet
        if (!this.tables.has(dataType)) {
            this.tables.set(dataType, table);
            this.pushOperation(async () => {
                await table.create(this.getSchemaBuilder(), this.context);
                this.tableNames.set(table.getName(), dataType);
            }, `Create new table for data type ${dataType}`);
        }

        if (!table.hasAllColumns(properties)) {
            table.addColumns(properties);
            // Ensure all the required columns exist for properties.
            this.pushOperation(
                () => table.ensureColumns(this.getSchemaBuilder(), this.context),
                `Ensure properties columns exists for ${dataType}`
            );
        }
    }

    /**
     * @private
     * @param {string} dataType
     * @returns {Table}
     */
    getTableForDataType(dataType) {
        return this.tables.get(dataType) ?? new Table(this.logger, dataType).addColumns([COLUMNS.TAG]);
    }

    /**
     * @override
     * @inheritDoc
     */
    ensureRelation(relationTag, fromTag, toTag) {
        const globalTag = SchemaProvider.getRelGlobalTag(fromTag, toTag, relationTag);
        this.ensureDataType(fromTag, []);
        const fromTable = this.getTableForDataType(fromTag);
        this.ensureDataType(toTag, []);
        const toTable = this.getTableForDataType(toTag);
        const table = this.getTableForRelation(globalTag);

        if (!this.tables.has(globalTag)) {
            this.tables.set(globalTag, table);
            this.pushOperation(async () => {
                const from = `${this.schema}.${fromTable.getName()}`;
                const to = `${this.schema}.${toTable.getName()}`;
                await table.createRelation(this.getSchemaBuilder(), from, to, this.context);
                this.tableNames.set(table.getName(), globalTag);
            }, `Ensure relation table exists for ${fromTag}-[${relationTag}]->${toTag}`);
        }
    }

    /**
     * @private
     * @param {string} globalTag
     * @return {Table}
     */
    getTableForRelation(globalTag) {
        return this.tables.get(globalTag) ?? new Table(this.logger, globalTag).addColumns([COLUMNS.FROM, COLUMNS.TO]);
    }

    /**
     * @override
     * @inheritDoc
     */
    getRelationTableName(relationTag, fromTag, toTag) {
        return this.getTableForRelation( SchemaProvider.getRelGlobalTag(fromTag, toTag, relationTag))?.getName();
    }

    /**
     * @private
     * @param {string} dataType
     * @return {Table}
     */
    getTable(dataType) {
        return this.tables.get(dataType) ?? null;
    }

    /**
     * @override
     * @inheritDoc
     */
    getTableName(dataType) {
        return this.getTable(dataType).getName() ?? '';
    }

    /**
     * @private
     * @return {!Knex.SchemaBuilder}
     */
    getSchemaBuilder() {
        return this.knex.schema.withSchema(this.schema);
    }

    /**
     * @override
     * @inheritDoc
     */
    getDBDialectName(){
        return this.knex.client.config.client;
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
                    const rawColumns = (await this.knex.raw(PG.QUERY_ALL_COLUMNS, {"schemaName":this.schema, "tableName":name}))?.rows?.map((r) => r.name)
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
        const globalTag = SchemaProvider.getRelGlobalTag(fromTag, toTag, relationTag);
        const tableName = this.tableNames.get(globalTag)
            ?? SchemaProvider.relationTranslationToODBName(this.db.name(fromTag), this.db.name(relationTag), this.db.name(toTag), globalTag);

        if (!this.tableNames.has(tableName)) {
            const table = new Table(this.logger, globalTag, tableName);
            this.tables.set(globalTag, table);
            this.tableNames.set(tableName, globalTag);

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
                () => this.knex.raw(PG.REMOVE_DUPLICATES, {"schema1":this.schema,"table1": tableName}),
                `[MIGRATION] Remove duplicates from relation table ${tableName}`
            );

            // Ensure update of FROM and TO columns + comment on the table
            const fromTable = SchemaProvider.tagTranslationToODBName(this.db.name(fromTag), fromTag);
            const toTable = SchemaProvider.tagTranslationToODBName(this.db.name(toTag), toTag);
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
        const tableName = this.tableNames.get(newDataType) ?? SchemaProvider.tagTranslationToODBName(this.db.name(newDataType), newDataType);
        const table = this.tables.get(newDataType) ?? new Table(this.logger, newDataType, tableName);

        if (!this.tableNames.has(tableName)) {
            this.tables.set(newDataType, table);
            this.tableNames.set(tableName, newDataType);

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
                        () => table.migratePropertyColumn(this.getSchemaBuilder(), tableName, columnName),
                        `[MIGRATION] column ${columnName} for data type ${newDataType} and table name ${tableName}`
                    );
                }
            }
        }
    }
    /**
     * @private
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
                const globalTag = SchemaProvider.getRelGlobalTag(fromTag, toTag, relTag);
                const finalName = SchemaProvider.relationTranslationToODBName(db.name(fromTag), db.name(relTag), db.name(toTag), globalTag);
                promises.push(modifier(name, finalName, globalTag));
            } else {
                // Otherwise, ignore the table.
                logger.warn(`No match has been found for Relation Table ${name} (${fromTag} -[${relTag}]-> ${toTag}) in the data model, ignore that table.`);
            }
        }

        return Promise.all(promises);
    }

    /**
     * @private
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
                const finalName = SchemaProvider.tagTranslationToODBName(db.name(tag), tag);
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
     * @param {string} tag
     * @param {string=} name
     */
    constructor(logger, tag, name) {

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
         * @type {?string}
         */
        this.name = name ?? null;

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

        /**
         * @private
         * @type {!Set<string>}
         */
        this.pendingColumns = new Set();
    }

    /**
     * Create the table associated to this "Table Object" in the database
     *
     * @param {!Knex.SchemaBuilder} builder
     * @param {!Context} context
     * @return {!Promise<Table>} this
     */
    async create(builder, context) {
        const dataType = await QuerySingle.from(this.tag).execute(context);

        if (dataType === null) {
            throw new Error(`Try to create a table for a non-existing data type: ${this.tag}`);
        }

        this.name = this.name ?? SchemaProvider.tagTranslationToODBName(dataType.name(), this.tag);
        await builder.createTable(this.name, (tableBuilder) => {
            tableBuilder.comment(`${SCHEMA_PREFIXES.TYPE}:${this.tag}`);

            tableBuilder.string(COLUMNS.TAG, 21)
                .primary({constraintName: (`${this.name}_${COLUMNS.TAG}_pk`).slice(-MAX_NAME_LENGTH)})
                .comment(`${SCHEMA_PREFIXES.PROPERTY}:${COLUMNS.TAG}`);
        });
        this.pendingColumns.delete(COLUMNS.TAG);
        this.columns.set(COLUMNS.TAG, COLUMNS.TAG);
    }

    /**
     * Change a column from the old postgreSQL connector to data source name conventions
     *
     * @param {!Knex.SchemaBuilder} builder
     * @param {string} tableName
     * @param {string} columnTag
     * @return {!Promise<void>}
     */
    async migratePropertyColumn(builder, tableName, columnTag) {
        const hardcodedTags = Array.from(Object.values(COLUMNS));
        await builder.alterTable(tableName, (tableBuilder) => {
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
            const columnName = SchemaProvider.tagTranslationToODBName(this.db.name(columnTag), columnTag);
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
                .withKeyName((`${tableName}_${COLUMNS.FROM}_fk`).slice(-MAX_NAME_LENGTH))
                .onDelete('CASCADE')
                .onUpdate('RESTRICT')
                .comment(`${SCHEMA_PREFIXES.PROPERTY}:${COLUMNS.FROM}`);

            builder.string(COLUMNS.TO, 21).alter()
                .notNullable()
                .references(COLUMNS.TAG)
                .inTable(`${schema}.${toTable}`)
                .withKeyName((`${tableName}_${COLUMNS.TO}_fk`).slice(-MAX_NAME_LENGTH))
                .onDelete('CASCADE')
                .onUpdate('RESTRICT')
                .comment(`${SCHEMA_PREFIXES.PROPERTY}:${COLUMNS.TO}`);

            builder.primary([COLUMNS.FROM, COLUMNS.TO]).comment(`${SCHEMA_PREFIXES.RELATION}:${this.tag}`);
            this.columns.set(COLUMNS.FROM, COLUMNS.FROM).set(COLUMNS.TO, COLUMNS.TO);
        });
    }

    /**
     * @param {!Knex.SchemaBuilder} builder
     * @param {!Context} context
     * @return {!Promise<void>}
     */
    async ensureColumns(builder, context) {
        if (this.pendingColumns.size === 0) {
            return;
        }

        if (typeof this.name !== 'string') {
            throw new Error(`Try to add columns to a table with no name: ${this.tag}`);
        }

        const properties = (await Query.from(this.tag)
            .followRecursively(CloudObject.extendRel, true)
            .follow(CloudObject.propertyRel).andReturn()
            .follow(PropertyModel.typeRel).andReturn()
            .execute(context))
            .reduce((props, pair) => props.set(pair[0].getTag(), pair), new Map());

        await builder.table(this.name, (tableBuilder) => {
            this.pendingColumns.forEach((columnTag) => {
                const comment = `${SCHEMA_PREFIXES.PROPERTY}:${columnTag}`

                // Exception for file content (binary content of files)
                if (columnTag === COLUMNS.FILE_CONTENT) {
                    tableBuilder.binary(columnTag).comment(comment);
                    this.columns.set(columnTag, columnTag);
                    return;
                } else if (!properties.has(columnTag)) {
                    this.logger.warn(`Try to create column ${columnTag} for table ${this.name} (${this.tag}) while it is not a valid property for this data type.`);
                    return;
                }

                // Primitive types are: string, number, boolean, date, color
                const [property, type] = properties.get(columnTag);
                const columnName = SchemaProvider.tagTranslationToODBName(property.name(), columnTag);
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
                } else {
                    this.logger.warn(`Type not found for creation of column ${columnTag} for table ${this.name} (${this.tag})`);
                    return;
                }
                this.columns.set(columnTag, columnName);
            });
        });
        this.pendingColumns.clear();
    }

    /**
     * @param {!Knex.SchemaBuilder} builder
     * @param {string} fromName
     * @param {string} toName
     * @param {!Context} context
     * @return {!Promise<void>}
     */
    async createRelation(builder, fromName, toName, context) {
        if (this.pendingColumns.size === 0) {
            return;
        }

        // Ensure we have the right models in the cache to create the relation table.
        const [fromTag, relTag, toTag] = this.tag.split(':');
        const relationTuple = (await Query.from(fromTag).andReturn()
            .follow(RelationModel.originModelRel.getInverse()).filter(Predicate.in(relTag)).andReturn()
            .follow(RelationModel.destinationModelRel).andReturn()
            .execute(context))
            .getFirst();

        if (relationTuple === null) {
            throw new Error(`Try to create a relation table for an object which is not a relation: ${fromTag}-[${relTag}]->${toTag}`);
        }

        // Build the name of this relation table
        const [from, rel, to] = relationTuple;
        this.name = this.name ?? SchemaProvider.relationTranslationToODBName(from.name(), rel.name(), to.name(), this.tag);
        await builder.createTable(this.name, (tableBuilder) => {
            tableBuilder.string(COLUMNS.FROM, 21)
                .notNullable()
                .references(COLUMNS.TAG)
                .inTable(fromName)
                // Avoid name conflict when auto constraint name is too long
                .withKeyName((`${this.name}_${COLUMNS.FROM}_fk`).slice(-MAX_NAME_LENGTH))
                .onDelete('CASCADE')
                .onUpdate('RESTRICT')
                .comment(`${SCHEMA_PREFIXES.PROPERTY}:${COLUMNS.FROM}`);

            tableBuilder.string(COLUMNS.TO, 21)
                .notNullable()
                .references(COLUMNS.TAG)
                .inTable(toName)
                // Avoid name conflict when auto constraint name is too long
                .withKeyName((`${this.name}_${COLUMNS.TO}_fk`).slice(-MAX_NAME_LENGTH))
                .onDelete('CASCADE')
                .onUpdate('RESTRICT')
                .comment(`${SCHEMA_PREFIXES.PROPERTY}:${COLUMNS.TO}`);

            tableBuilder
                .primary([COLUMNS.FROM, COLUMNS.TO])
                .comment(`${SCHEMA_PREFIXES.RELATION}:${this.tag}`);
        });
        this.pendingColumns.clear();
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
        const rawColumns = await client.raw(PG.QUERY_COLUMNS, {"schemaName": schema, "tableName": this.name});
        this.logger.debug(`Found ${rawColumns.rowCount} columns to be validated in table ${this.name}`);

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
     * @package
     * @param {!Array<string>} columns
     * @return {!Table} this
     */
    addColumns(columns) {
        for (const column of columns) {
            if (!this.columns.has(column)) {
                this.pendingColumns.add(column);
            }
        }
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
        if (typeof this.name !== 'string') {
            throw new Error(`Try to get the name of table ${this.tag} which has not been set yet.`);
        }

        return this.name;
    }

    /**
     * @package
     * @param {!Array<string>} properties
     */
    hasAllColumns(properties) {
        return properties.every((p) => this.columns.has(p) || this.pendingColumns.has(p));
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
