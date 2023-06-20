import {CloudObject, Config, DBView, Direction, Query, QuerySingle, RelationModel} from 'olympe';
import {Knex} from 'knex';
import {COLUMNS} from '../SQLQueryExecutor';
import SchemaProvider from './SchemaProvider';

/**
 * @typedef {Object.<string, string>} PropertyNameMap map of (property tag, column name)
 * @typedef {Object.<string, PropertyNameMap>} TableColumnsMap maps table names to a map of (property tag, column name)
 * @typedef {Object.<string, string>} DataTypeNameMap map of (data type tag, table name)
 * @typedef {Object.<string, string>} RelationNameMap map of (relation global tag, table name)
 */
/**
 * @enum {string}
 */
const oConfigNames = {
    schemaReader: 'schemaReader',
    dataTypes: 'dataTypes',
    dataTypeTag: 'dataTypeTag',
    tableName: 'tableName',
    propertyTag: 'propertyTag',
    columnName: 'columnName',
    relations: 'relations',
    columns: 'columns',
    fromTag: 'fromTag',
    toTag: 'toTag',
    relationTag: 'relationTag'
};
/**
 * @implements {SchemaProvider}
 */
export default class SchemaReader {

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
         * @type {TableColumnsMap}
         */
        this.tableColumnsMap = {};
        /**
         * @private
         * @type {DataTypeNameMap}
         */
        this.dataTypeNameMap = {};
        /**
         * @private
         * @type {RelationNameMap}
         */
        this.relationNameMap = {};

        /**
         * Guarantees O(1) access to check relation name existence
         * @private
         * @type {!Set<string>}
         */
        this.relationNames = new Set();

        /**
         * @private
         * @type {!Array<Promise>}
         */
        this.errors = [];

    }

    /**
     *  @override
     *  @inheritDoc
     */
    ensureDataType(dataType, properties) {
        // schema reader won't create any missing table
        const tableName = this.getTableName(dataType);
        if (!tableName) {
            this.errors.push(Promise.reject(`No table name defined for the following tag: ${dataType}`));
        } else {
            for (const tag of properties) {
                if (!this.getColumn(tableName, tag)) {
                    this.errors.push(Promise.reject(`No column was found within table ${tableName} for property tag ${tag}`));
                }
            }
        }
    }

    /**
     *  @override
     *  @inheritDoc
     */
    ensureRelation(relationTag, fromTag, toTag) {
        // schema reader won't create any missing table

        // 1. verify from and To data types for the relation have a table
        this.ensureDataType(fromTag, []);
        this.ensureDataType(toTag, []);

        // 2. check that the global tag has a corresponding table
        if (!this.getRelationTableName(relationTag, fromTag, toTag)) {
            this.errors.push(Promise.reject(`No table name defined for the relation ${relationTag} from ${fromTag} to ${toTag}`))
        }
    }

    /**
     *  @override
     *  @inheritDoc
     */
    getAllColumns(...tableNames) {
        return (function* (tables, tableColumnsMap) {
            for (const tableName of tables) {
                for (const entry of Object.entries(tableColumnsMap[tableName])) {
                    // Do not consider the File Content column (with blob). Only use it for upload/download operations.
                    // filter for column name being file content.
                    if (entry[1] !== COLUMNS.FILE_CONTENT) {
                        yield entry;
                    }
                }
            }
        }(tableNames, this.tableColumnsMap));
    }

    /**
     *  @override
     *  @inheritDoc
     */
    getColumn(table, property) {
        const columnName = this.tableColumnsMap[table][property];
        if (!columnName) {
            this.errors.push(Promise.reject(`Column name ${columnName} is falsy for table ${table}, property ${property}`))
        }
        return columnName ?? '';
    }

    /**
     *  @override
     *  @inheritDoc
     */
    getRelationTableName(relationTag, fromTag, toTag) {
        const globalTag = SchemaProvider.getRelGlobalTag(fromTag, toTag, relationTag)
        const relationName = this.relationNameMap[globalTag];
        if (!relationName) {
            this.errors.push(Promise.reject(`Relation name ${relationName} is falsy
             for tag ${relationTag} from ${fromTag} to ${toTag}`));

        }
        return relationName;
    }

    /**
     *  @override
     *  @inheritDoc
     */
    getRelationTables(fromTables, relation) {
        const toOrigin = relation.getDirection() === Direction.ORIGIN;
        const fromModelRel = toOrigin ? RelationModel.destinationModelRel : RelationModel.originModelRel;
        const toModelRel = toOrigin ? RelationModel.originModelRel : RelationModel.destinationModelRel;
        const fromModels = Query.from(relation).follow(fromModelRel).followRecursively(CloudObject.extendedByRel, true).executeFromCache();
        const toModel = QuerySingle.from(relation).follow(toModelRel).executeFromCache();
        const toModelTableNames = toModel !== null ? this.getTablesOfType(/** @type {!Tag} */ (toModel)) : [];
        const result = [];
        for (const fromTableName of fromTables) {
            const fromTableTag = this.getTableTag(fromTableName);
            // Only do something if the specified table does extend the origin model of the relation
            if (fromModels.has(fromTableTag)) {
                toModelTableNames.forEach((toTableName) => {
                    const toTableTag = this.getTableTag(toTableName);
                    const relGlobalTag = toOrigin
                        ? SchemaProvider.getRelGlobalTag(toTableTag, fromTableTag, relation.getTag())
                        : SchemaProvider.getRelGlobalTag(fromTableTag, toTableTag, relation.getTag())
                    const relTableName = toOrigin
                        ? this.getRelationTableName(relation.getTag(), toTableTag, fromTableTag)
                        : this.getRelationTableName(relation.getTag(), fromTableTag, toTableTag);
                    if (this.relationNames.has(relGlobalTag)) {
                        result.push([fromTableName, relTableName, toTableName]);
                    }
                });
            }
        }
        return result;
    }

    /**
     *  @override
     *  @inheritDoc
     */
    getSchema() {
        return this.schema;
    }

    /**
     *  @override
     *  @inheritDoc
     */
    getTableName(dataType) {
        const tableName = this.dataTypeNameMap[dataType];
        if (!tableName) {
            this.errors.push(Promise.reject(`No table name defined for the following tag: ${dataType}`));
            return '';
        }
        return tableName;

    }

    /**
     *  @override
     *  @inheritDoc
     */
    getTableTag(table) {
        for (const [key, val] of Object.entries(this.dataTypeNameMap)) {
            if (val === table) {
                return key;
            }
        }
        this.errors.push(Promise.reject(`Did not find any tag for table name ${table}, check the oConfig schemaReader config`));
        return null;
    }

    /**
     *  @override
     *  @inheritDoc
     */
    getTablesOfType(dataType, includeInheritance = true) {
        let query = Query.from(dataType);
        if (includeInheritance) {
            query = query.followRecursively(CloudObject.extendedByRel, true);
        }
        return query.executeFromCache().map((model) => {
            let tableName = null;
            try {
                tableName = this.getTableName(model.getTag()) ?? null;
            } catch (e) {
                this.errors.push(Promise.reject(`Try to get the name of a table not defined in Schema Reader config`));
            }
            return tableName;
        }).filter((v) => v !== null);
    }

    /**
     *  @override
     *  @inheritDoc
     */
    init(client, schema, context) {
        // 1. init field with parameters
        this.schema = schema;
        this.knex = client;
        this.context = context;

        // 2. import config from existing config in oConfig
        const config = Config.getParameter(oConfigNames.schemaReader)[schema];
        /** @type {!Array<Object>} */
        const dataTypeConfigs = config[oConfigNames.dataTypes];
        /**
         * Can be empty
         * @type {!Array<Object>} */
        const relationConfigs = config[oConfigNames.relations] ?? [];

        // 3. check data type configs has at least one element
        if (!dataTypeConfigs || !Array.isArray(dataTypeConfigs) || dataTypeConfigs.length === 0) {
            const errorMsg = `Data type config should be a non empty array, but found ${dataTypeConfigs}`;
            this.errors.push(Promise.reject(errorMsg));
            return Promise.reject(errorMsg);
        }

        // 4. Fill the mappings for column and table names:
        //  - tableColumnsMap
        //  - dataTypeNameMap
        for (const dataTypeConfig of dataTypeConfigs) {
            // get config for one specific data type
            const dataTypeTag = dataTypeConfig[oConfigNames.dataTypeTag];

            // Step 4.1: create data type tag -> table name mapping
            // table name is optional, compute it if falsy
            const tableNameForDataType = dataTypeConfig[oConfigNames.tableName]
                || SchemaProvider.tagTranslationToODBName(this.db.name(dataTypeTag), dataTypeTag);
            // set mapping for the data type
            this.dataTypeNameMap[dataTypeTag] = tableNameForDataType;

            // Step 4.2: create property tags -> column name mappings for the current data type
            for (const columnConfig of dataTypeConfig[oConfigNames.columns]) {
                const propertyTag = columnConfig[oConfigNames.propertyTag];
                const columnName = columnConfig[oConfigNames.columnName]
                    || SchemaProvider.tagTranslationToODBName(this.db.name(propertyTag), propertyTag);
                const propertyNameMap = this.tableColumnsMap[tableNameForDataType];
                if (propertyNameMap && typeof propertyNameMap === 'object') {
                    // the property name map exists already for this table
                    propertyNameMap[propertyTag] = columnName;
                } else {
                    // Initialise the property       name map for this table
                    this.tableColumnsMap[tableNameForDataType] = {
                        [propertyTag]: columnName
                    };
                }
            }
            this.tableColumnsMap[tableNameForDataType][COLUMNS.TAG] = COLUMNS.TAG;
        }

        // 5. Fill the mappings for relations table names:
        //  - relationNameMap
        for (const relationConfig of relationConfigs) {
            const relationTag = relationConfig[oConfigNames.relationTag];
            const fromTag = relationConfig[oConfigNames.fromTag];
            const toTag = relationConfig[oConfigNames.toTag];
            const globalTag = SchemaProvider.getRelGlobalTag(
                fromTag,
                toTag,
                relationTag);
            this.relationNameMap[globalTag] = relationConfig[oConfigNames.tableName]
                || SchemaProvider.relationTranslationToODBName(fromTag, relationTag, toTag, globalTag);
            this.relationNames.add(globalTag);
        }
        return Promise.resolve();
    }
    /**
     * @override
     * @inheritDoc
     */
    getDBDialectName() {
        return this.knex.client.config.client;
    }

    /**
     *  @override
     *  @inheritDoc
     */
    waitForFree() {
        return Promise.allSettled(this.errors).then((errorPromises) => {
            // capture all errors reasons
            const errorMsg = errorPromises.reduce(
                (acc, errorPromise) => errorPromise.status === 'rejected'
                    ? acc + `Error : ${errorPromise.reason}\n`
                    : acc, '');
            // clear errors promises array
            this.errors = [];
            if (errorPromises) {
                // log if any error happened
                this.logger.error(`Schema reader failed with reason(s): \n${errorMsg}`);
                return Promise.reject(errorMsg);
            } else {
                return Promise.resolve();
            }
        })
    }
}


