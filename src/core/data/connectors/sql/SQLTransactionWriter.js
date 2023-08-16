import {Knex} from 'knex';
import {COLUMNS} from "./SQLQueryExecutor";
import {CloudObject, Color, File as OFile, Operation, Query} from 'olympe';
import {DB_DIALECT_NAMES, MSSQL} from './_statics';

export default class SQLTransactionWriter {

    /**
     * @param {!log.Logger} logger
     * @param {!Knex} client
     * @param {!SchemaProvider} schemaProvider
     */
    constructor(logger, client, schemaProvider) {

        /**
         * @private
         * @type {!log.Logger}
         */
        this.logger = logger;

        /**
         * @private
         * @type {!Knex}
         */
        this.client = client;

        /**
         * @private
         * @type {!SchemaProvider}
         */
        this.schemaProvider = schemaProvider;

        /**
         * @private
         * @type {(function(!Knex.QueryBuilder):!Knex.QueryBuilder)[]}
         */
        this.stack = [];

        /**
         * @private
         * @type {!Set<string>}
         */
        this.fileTypes = new Set(Query.from(OFile)
            .followRecursively(CloudObject.extendedByRel, true)
            .executeFromCache().keys()
        );
    }

    /**
     * Execute the list of operations
     *
     * @param {Operation[]} operations
     * @param {boolean=} batch
     * @return {!Promise<void>}
     */
    async applyOperations(operations, batch = false) {
        const batchInserts = batch ? new Map() : null;

        await this.buildStack(operations, batchInserts);

        // Return the promise executing the knex transaction on the database.
        return this.client.transaction(async (trx) => {
            const schema = this.schemaProvider.getSchema();
            for (const knexOp of this.stack) {
                knexOp(this.client.withSchema(schema)).transacting(trx);
            }

            // Process batch inserts in case of large transactions.
            if (batchInserts !== null) {
                for (const [table, rows] of batchInserts) {
                    this.client.batchInsert(`${schema}.${table}`, rows, 500).transacting(trx);
                }
            }

            this.logger.debug(`Transaction with ${this.stack.length} operations will be commit`);

            return trx;
        }, {isolationLevel: 'serializable'}).finally(() => {
            // Clear the writer.
            this.stack.length = 0;
            this.logger.debug('Transaction completed');
        });
    }

    /**
     * Execute the list of operations
     *
     * @param {Operation[]} operations
     * @return {Promise<!Array<string>>}
     */
    async getRawOperations(operations) {
        await this.buildStack(operations, null);
        const schema = this.schemaProvider.getSchema();
        return this.stack.map((fn) => fn(this.client.withSchema(schema)).toString());
    }

    /**
     * @private
     * @param {Operation[]} operations
     * @param {?Map<string, !Array<!Object>>} batchInserts
     */
    async buildStack(operations, batchInserts) {
        // loop over all operations, to ensure the schema is ready for the transaction
        for (const op of operations) {
            switch(op.type) {
                case 'CREATE':
                    this.stack.push(this.create(op.object, op.model, op.properties, batchInserts));
                    break;
                case 'UPDATE':
                    this.stack.push(this.update(op.object, op.model, op.properties));
                    break;
                case 'DELETE':
                    this.stack.push(this.delete(op.object, op.model));
                    break;
                case 'CREATE_RELATION':
                    // Skip model relations => represented through tables containing rows (instances)
                    if (op.relation !== CloudObject.modelRel.getTag()) {
                        this.stack.push(this.createRelation(op.relation, op.from, op.to, op.fromModel, op.toModel, batchInserts));
                    }
                    break;
                case 'DELETE_RELATION':
                    this.stack.push(this.deleteRelation(op.relation, op.from, op.to, op.fromModel, op.toModel));
                    break;
                default:
                    throw new Error(`Transaction error: operation type is unknown: ${op.type}`);
            }
        }

        // Wait if schema requires updates
        await this.schemaProvider.waitForFree();
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} dataType
     * @param {!Map<string, *>=} properties
     * @param {Map<string, !Array>} batchInserts
     * @return {function(!Knex.QueryBuilder):!Knex.QueryBuilder}
     */
    create(tag, dataType, properties, batchInserts) {
        this.schemaProvider.ensureDataType(dataType, Array.from(properties?.keys() ?? []));
        return (builder) => {
            const tableName = this.schemaProvider.getTableName(dataType);
            const objectToInsert = this.toObject(tableName, properties);

            // Proceed to batch insert instead of normal insert if large transaction, and not a file
            // Indeed, files are created twice (first with the content, then with other properties), so the conflict must be handled.
            if (batchInserts !== null && !this.fileTypes.has(dataType)) {
                const tableName = this.schemaProvider.getTableName(dataType);
                const batch = batchInserts.get(tableName) ?? [];
                if (batch.length === 0) {
                    batchInserts.set(tableName, batch);
                }
                objectToInsert[COLUMNS.TAG] = tag;
                batch.push(objectToInsert);
            }

            // Normal insert
            switch (this.schemaProvider.getDBDialectName()) {
                case DB_DIALECT_NAMES.MSSQL:
                    return builder.client.raw(
                        MSSQL.UPSERT(tag, Array.from(Object.keys(objectToInsert))),
                        {
                            schema: this.schemaProvider.getSchema(),
                            table: tableName,
                            ...objectToInsert
                        }
                    );
                case DB_DIALECT_NAMES.POSTGRES:
                case DB_DIALECT_NAMES.MYSQL:
                case DB_DIALECT_NAMES.SQLITE3:
                    objectToInsert[COLUMNS.TAG] = tag;
                    // for cross-platform support between these 3 dialects, the conflict column has to be specified,
                    // the specified conflict column has to be a PRIMARY KEY
                    return builder.table(tableName).insert(objectToInsert).onConflict(COLUMNS.TAG).merge();
            }
        }
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} dataType
     * @param {!Map<string, *>} properties
     * @return {function(!Knex.QueryBuilder):!Knex.QueryBuilder}
     */
    update(tag, dataType, properties) {
        this.schemaProvider.ensureDataType(dataType, Array.from(properties.keys()));
        return (builder) => {
            const tableName = this.schemaProvider.getTableName(dataType);
            return builder.table(tableName).where(COLUMNS.TAG, tag).update(this.toObject(tableName, properties));
        };
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} dataType
     * @return {function(!Knex.QueryBuilder):!Knex.QueryBuilder}
     */
    delete(tag, dataType) {
        const tableName = this.schemaProvider.getTableName(dataType);
        // Delete the instance itself, auto cascade the deletion of relations.
        return (builder) => tableName ? builder.table(tableName).where(COLUMNS.TAG, tag).del() : builder;
    }

    /**
     * @private
     * @param {string} relation
     * @param {string} from
     * @param {string} to
     * @param {?string=} fromModel
     * @param {?string=} toModel
     * @param {Map<string, !Array>} batchInserts
     * @return {?function(!Knex.QueryBuilder):!Knex.QueryBuilder}
     */
    createRelation(relation, from, to, fromModel, toModel, batchInserts) {
        if (typeof fromModel !== 'string' || typeof toModel !== 'string') {
            throw new Error(`SQL connector: invalid transaction: missing origin or destination model to create the relation ${from}-[${relation}]->${to}`);
        }
        this.schemaProvider.ensureRelation(relation, fromModel, toModel);
        return (builder) => {
            const tableName = this.schemaProvider.getRelationTableName(relation, fromModel, toModel);

            // Proceed to batch insert for relations in case of large transaction.
            if (batchInserts !== null) {
                const batch = batchInserts.get(tableName) ?? [];
                if (batch.length === 0) {
                    batchInserts.set(tableName, batch);
                }
                batch.push({ [COLUMNS.FROM]: from, [COLUMNS.TO]: to });
                return builder;
            }

            // Relation creation for normal transactions.
            switch (this.schemaProvider.getDBDialectName()) {
                case DB_DIALECT_NAMES.MSSQL:
                    return builder.client.raw(
                        MSSQL.INSERT_REL_IF_NOT_EXIST,
                        {
                            schema: this.schemaProvider.getSchema(),
                            relationTable: tableName,
                            [COLUMNS.FROM]: from,
                            [COLUMNS.TO]: to,
                        }
                    );
                case DB_DIALECT_NAMES.POSTGRES:
                case DB_DIALECT_NAMES.MYSQL:
                case DB_DIALECT_NAMES.SQLITE3:
                default:
                    return builder.table(tableName).insert({ [COLUMNS.FROM]: from, [COLUMNS.TO]: to }).onConflict().ignore();
            }
        }
    }

    /**
     * @private
     * @param {string} relation
     * @param {string} from
     * @param {string} to
     * @param {?string=} fromModel
     * @param {?string=} toModel
     * @return {function(!Knex.QueryBuilder):!Knex.QueryBuilder}
     */
    deleteRelation(relation, from, to, fromModel, toModel) {
        // Skip model relations => represented through tables containing rows (instances)
        if (relation === CloudObject.modelRel.getTag()) {
            return (_) => Promise.resolve();
        }
        if (typeof fromModel !== 'string' || typeof toModel !== 'string') {
            throw new Error(`SQL connector: invalid transaction: missing origin or destination model to create the relation ${from}-[${relation}]->${to}`);
        }
        const tableName = this.schemaProvider.getRelationTableName(relation, fromModel, toModel);
        return (builder) => tableName ? builder.table(tableName).where({ [COLUMNS.FROM]: from, [COLUMNS.TO]: to }).del() : builder;
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} tableName
     * @param {!Map<string, *>=} properties
     * @return {!Object}
     */
    toObject(tableName, properties) {
        const object = {};
        if (properties) {
            for (const [prop, value] of properties) {
                const colName = this.schemaProvider.getColumn(tableName, prop);
                object[colName] = SQLTransactionWriter.serializeValue(value);
            }
        }
        return object;
    }

    /**
     * @param {string | number | boolean | !Date | !Color} val
     * @return {!Object}
     */
    static serializeValue(val) {
        let serialValue = val;
        // non primitive types
        if (val instanceof Date) {
            serialValue = val.toJSON();
        } else if (val instanceof Color) {
            serialValue = `${val.getRed()};${val.getGreen()};${val.getBlue()};${val.getAlpha()}`;
        }
        return serialValue;
    }
}
