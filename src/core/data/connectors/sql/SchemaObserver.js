import {Knex} from "knex";
import {Query, CloudObject, tagToString, Direction, RelationModel, PropertyModel, QuerySingle,
    StringModel, NumberModel, BooleanModel, DatetimeModel, ColorModel, DBView} from 'olympe';
import {columns} from "./SQLBuilder";
import {QUERY_COLUMNS, QUERY_TABLES} from "./_statics";

export default class SchemaObserver {

    /**
     * @param {!loglevel.Logger} logger
     */
    constructor(logger) {

        /**
         * @private
         * @type {!loglevel.Logger}
         */
        this.logger = logger;

        /**
         * @private
         * @type {string}
         */
        this.schema = '';

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
        this.knex = client.withSchema(schema);
        this.schema = schema;

        // Initialize the tables map
        this.pushOperation(() => {
            return client.raw(QUERY_TABLES, [schema]).then((result) => {
                return Promise.all(result.rows.map((row) => new Table(row.name, row.tag).check(client, schema)
                    .then((table) => {
                        this.tables.set(table.getName(), table);
                        this.tableFromTags.set(table.getTag(), table.getName());
                    })
                ));
            });
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
        this.logger.debug(`Push operation:${debugName}`);

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
                this.logger.error(`Error for operation ${debugName}: ${r}`);
                callNext();
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
     * @return {string[]}
     */
    getInheritedTables(dataType) {
        return Query.from(dataType)
            .followRecursively(CloudObject.extendedByRel, true)
            .executeFromCache()
            .map((model) => this.tableFromTags.get(model.getTag()) ?? null)
            .filter((v) => v !== null);
    }

    /**
     * @param {string} table
     * @return {string[]}
     */
    getAllColumns(table) {
        return this.tables.get(table)?.getColumns() ?? [];
    }

    /**
     * @param {string[]} fromTables
     * @param {!Relation} relation
     * @return {[string, string, string][]}
     */
    getRelationTables(fromTables, relation) {
        const toOrigin = relation.getDirection() === Direction.ORIGIN
        const fromModelRel = toOrigin ? RelationModel.destinationModelRel : RelationModel.originModelRel;
        const toModelRel = toOrigin ? RelationModel.originModelRel : RelationModel.destinationModelRel;
        const fromModels = Query.from(relation).follow(fromModelRel).followRecursively(CloudObject.extendedByRel, true).executeFromCache();

        const toModel = Query.from(relation).followSingle(toModelRel).executeFromCache();
        const toModelTableNames = toModel !== null ? this.getInheritedTables(toModel) : [];
        const relationName = CloudObject.get(relation).name();

        const result = [];
        for (const fromTableName of fromTables) {
            const fromTable = this.tables.get(fromTableName);
            // Only do something if the specified table does extend the origin model of the relation
            if (fromTable && fromModels.has(fromTable.getTag())) {
                toModelTableNames.forEach((toTableName) => {
                    const relTableName = toOrigin
                        ? SchemaObserver.getSQLRelationName(toTableName, relationName, fromTableName)
                        : SchemaObserver.getSQLRelationName(fromTableName, relationName, toTableName);
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
        const tableName = this.tableFromTags.get(dataType) ?? SchemaObserver.toSQLName(CloudObject.get(dataType).name());
        const table = this.ensureTable(dataType, tableName, [columns.TAG]);
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
        const globalTag = `${fromTag}_${relationTag}_${toTag}`;
        const tableName = this.tableFromTags.get(globalTag) ?? SchemaObserver.getSQLRelationName(
            CloudObject.get(fromTag).name(),
            CloudObject.get(relationTag).name(),
            CloudObject.get(toTag).name()
        );
        const table = this.ensureTable(globalTag, tableName, [columns.FROM, columns.TO]);
        this.pushOperation(
            () => {
                const from = `${this.schema}.${this.tableFromTags.get(fromTag)}`;
                const to = `${this.schema}.${this.tableFromTags.get(toTag)}`;
                return table.ensureRelationColumns(this.getSchemaBuilder(), from, to);
            },
            `Ensure properties columns exists for ${fromTag}-[${relationTag}]->${toTag}`
        );
        return tableName;
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} name
     * @param {string[]} primaryKeys
     * @return {!Table}
     */
    ensureTable(tag, name, primaryKeys) {
        const table = this.tables.get(name) ?? new Table(name, tag);
        if (!this.tables.has(name)) {
            this.tables.set(name, table);
            this.tableFromTags.set(tag, name);
            this.pushOperation(
                () => table.create(this.getSchemaBuilder(), primaryKeys),
                `Create new table for tag ${tag}, with name ${name}`
            );
        }
        return table;
    }

    /**
     * @param {string} dataType
     * @return {?string}
     */
    getTable(dataType) {
        return this.tableFromTags.get(dataType) ?? null;
    }

    /**
     * @param {string} dataType
     * @param {string} property
     * @return {?string}
     */
    getColumn(dataType, property) {
        return this.tables.get(this.tableFromTags.get(dataType))?.getColumn(property) ?? null;
    }

    /**
     * @param {string} relationTag
     * @param {string} fromTag
     * @param {string} toTag
     * @return {?string}
     */
    getRelation(relationTag, fromTag, toTag) {
        const globalTag = `${fromTag}_${relationTag}_${toTag}`;
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
     * @return {string}
     */
    static getSQLRelationName(from, rel, to) {
        return `${this.toSQLName(from, 19)}_${this.toSQLName(rel, 19)}_${this.toSQLName(to, 19)}`
    }

    /**
     * @param {string} name
     * @param {number=} max
     */
    static toSQLName(name, max = 59) {
        return name.replace(/\W/g, '_').substring(0, max);
    }
}

class Table {

    /**
     * @param {string} name
     * @param {string} tag
     */
    constructor(name, tag) {

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
     * @param {string[]} primaryKeys
     * @return {!Promise<Table>} this
     */
    async create(builder, primaryKeys) {
        await builder.createTable(this.name, (tableBuilder) => {
            primaryKeys.forEach((key) => tableBuilder.string(key, 21));
            tableBuilder.primary(primaryKeys);
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
            return Promise.resolve();
        }

        await builder.table(this.name, (tableBuilder) => {
            columnsToCreate.forEach((columnTag) => {
                // Primitive types are: string, number, boolean, date, color
                const property = CloudObject.get(columnTag);
                const columnName = SchemaObserver.toSQLName(property.name());
                const type = /** @type {!olympe.dc.CloudObject} */ (QuerySingle.from(columnTag).follow(PropertyModel.typeRel).executeFromCache());
                const db = DBView.get();
                if (db.isExtending(type, StringModel)) { // this also takes care of enums
                    tableBuilder.string(columnName, 1000).comment(columnTag);
                } else if (db.isExtending(type, NumberModel)) {
                    tableBuilder.double(columnName).comment(columnTag);
                } else if (db.isExtending(type, BooleanModel)) {
                    tableBuilder.boolean(columnName).comment(columnTag);
                } else if (db.isExtending(type, DatetimeModel)) {
                    tableBuilder.string(columnName).comment(columnTag);
                } else if (db.isExtending(type, ColorModel)) {
                    tableBuilder.string(columnName, 50).comment(columnTag);
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
    async ensureRelationColumns(builder, fromName, toName) {
        if (this.columns.size > 0) {
            return Promise.resolve(); // Has already been initialized
        }

        await builder.table(this.name, (tableBuilder) => {
            tableBuilder.string(columns.FROM)
                .notNullable()
                .references(columns.TAG)
                .inTable(fromName)
                .onDelete('CASCADE');

            tableBuilder.string(columns.TO)
                .notNullable()
                .references(columns.TAG)
                .inTable(toName)
                .onDelete('CASCADE');
        });
    }

    /**
     * @param {!Knex} client
     * @param {string} schema
     * @return {!Promise<Table>} this
     */
    async check(client, schema) {
        // Update the schema if necessary
        const model = CloudObject.get(this.tag);
        const targetName = SchemaObserver.toSQLName(model.name());
        if (targetName !== this.name) {
            await client.schema.withSchema(schema).renameTable(this.name, targetName);
            this.name = targetName;
        }

        const properties = model.followRecursively(CloudObject.extendRel, true).andReturn()
            .follow(CloudObject.propertyRel).andReturn()
            .executeFromCache();

        const columns = await client.raw(QUERY_COLUMNS, [schema, this.name]);
        for (const {tag, name} of columns.rows) {
            tag && this.columns.set(tag, name);
        }

        for (const [model, property] of properties) {
            if (model.getTag() === tagToString(CloudObject)) {
                continue; // Skip properties of CloudObject.
            }

            const currentColName = this.columns.get(property.getTag());
            if (currentColName) {
                const targetColName = SchemaObserver.toSQLName(property.name());
                if (currentColName !== targetColName) {
                    await client.schema.withSchema(schema).alterTable(this.name, (table) => {
                        table.renameColumn(currentColName, targetColName);
                    });
                }
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
        return this.name;
    }

    /**
     * @return {string[]}
     */
    getColumns() {
        return Array.from(this.columns.values());
    }

    /**
     * @param {string} property
     * @return {string | undefined}
     */
    getColumn(property) {
        return this.columns.get(property);
    }
}
