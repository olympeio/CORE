import {Knex} from 'knex';
import {COLUMNS} from "./SQLQueryExecutor";
import {CloudObject, File as OFile, Operation, Query, getUniqueTag} from 'olympe';
import {DB_DIALECT_NAMES, MSSQL} from './_statics';
import {retryOnError, serializeValue} from './_helpers';
import {SchemaConcurrencyError} from "./schema/SchemaObserver";

/**
 * @typedef {(function(!Knex.QueryBuilder):Knex.QueryBuilder)} StackOperation
 */

/**
 * @typedef {string} RawOperation
 */

/**
 * @typedef {Map<string, !Array<!Object>>} BatchInserts
 */

/**
 * @typedef {Object} StackItem
 * @property {Function} resolve
 * @property {Function} reject
 * @property {StackOperation|RawOperation[]} operations
 * @property {?BatchInserts} batchInserts
 * @property {Set<string>} affectedTags
 * @property {string} operationId
 * @property {?function(*[], ?BatchInserts):!Promise<*>} executor
 */



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
         * @type {StackItem[]}
         */
        this.stack = [];

        /**
         * @private
         * @type {Set<string>}
         */
        this.lockedTags = new Set();

        /**
         * @private
         * @type {!Set<string>}
         */
        this.fileTypes = new Set(Query.from(OFile)
            .followRecursively(CloudObject.extendedByRel, true)
            .executeFromCache().keys()
        );

        /**
         * Used to bypass the execution of SQL queries on the database directly to use another transport layer (eg: HTTP)
         *
         * @private
         * @type {function(*[], ?BatchInserts):!Promise<*>}
         */
        this.executor = this.executeStackOperations;
    }

    /**
     * Set a function that will handle the execution of the SQL query once built, instead of being applied directly on a local database.
     *
     * @param {function(*[], ?BatchInserts):!Promise<*>} executor
     * @return {this}
     */
    delegateExecution(executor) {
        this.executor = executor;
        return this;
    }

    /**
     * Execute the list of operations
     *
     * @param {Operation[]} operations
     * @param {boolean=} batch
     * @param {boolean=} raw
     * @param {?function(*[], ?BatchInserts):!Promise<*>} executor
     * @return {!Promise<void>}
     */
    applyOperations(operations, batch = false, raw = false, executor = null) {
        // Ensure we catch schema concurrent errors and retry the operation, up to 5 times
        return retryOnError(async () => {
            const batchInserts = batch ? new Map() : null;

            const operationId = getUniqueTag();
            const [operationsList, affectedTags] = await this.buildStack(operations, batchInserts);

            // Wait if schema requires updates
            await this.schemaProvider.waitForFree();

            return new Promise((resolve, reject) => {
                this.stack.push({
                    resolve,
                    reject,
                    operations: raw ? this.getRawOperations(operationsList) : operationsList,
                    affectedTags,
                    batchInserts,
                    operationId,
                    executor
                });
                this.processNextStackOperation();
            });
        }, [SchemaConcurrencyError], 3);
    }

    /**
     * @private
     * @param {Array<StackOperation>} operations
     * @return {Array<RawOperation>}
     */
    getRawOperations(operations) {
        const schema = this.schemaProvider.getSchema();
        return operations.reduce((res, fn) => {
            const builder = fn(this.client.withSchema(schema));
            // builder can be null for no-op
            builder !== null && res.push(builder.toString());
            return res;
        }, []);
    }

    /**
     * @private
     */
    processNextStackOperation() {
        this.logger.trace(`processNextStackOperation`);
        if (this.stack.length === 0) {
            // stack is empty
            return;
        }

        // find the first non-conflicting operation
        this.detectMultipleTransactionsOnIdenticalObject();
        const foundIndex = this.getFirstNonConflictingOperation();
        if (foundIndex === -1) {
            // no non-conflicting item found, wait next iteration
            return;
        }
        const nextItem = this.stack.splice(foundIndex, 1)[0];
        // lock affected tags
        nextItem.affectedTags.forEach(tag => this.lockedTags.add(tag));

        this.logger.trace(`Starting operation ${nextItem.operationId}`);
        const executor = nextItem.executor ?? this.executor;
        executor.call(this, nextItem.operations, nextItem.batchInserts).then((result) => {
            this.logger.trace(`Operation ${nextItem.operationId} resolved`);
            nextItem.resolve(result);
        }).catch((error) => {
            this.logger.trace(`Operation ${nextItem.operationId} rejected with message ${error}`);
            nextItem.reject(error);
        }).finally(() => {
            // unlock affected tags
            nextItem.affectedTags.forEach(tag => this.lockedTags.delete(tag));
            // call to check if pending operations could be processed now that those tags are unlocked
            this.processNextStackOperation();
        });
        // when processing an operation, it's possible that another one in the stack is non-conflicting
        // calling processNextStackOperation to find it and process if possible
        this.processNextStackOperation();
    }

    /**
     * Find the first Stack Operation which doesn't affect any of the currently locked tags
     * @private
     * @return {number}
     */
    getFirstNonConflictingOperation() {
        const lockedTags = Array.from(this.lockedTags);
        const nbLockedTags = this.lockedTags.size;
        return this.stack.findIndex((item) => {
            const nbAffectedTags = item.affectedTags.size;
            // Do the `.some()` operation on the smallest Set
            return nbLockedTags < nbAffectedTags
                ? !lockedTags.some(tag => item.affectedTags.has(tag))
                : !Array.from(item.affectedTags).some(tag => this.lockedTags.has(tag));
        });
    }

    /**
     * @private
     */
    detectMultipleTransactionsOnIdenticalObject() {
        const firstTag = (op) => op.affectedTags.values().next().value;
        if (
            this.stack.length >= 2 // has at least 2 operations
            && this.stack[0].affectedTags.size === 1 // both operations contain only one affected tag
            && this.stack[1].affectedTags.size === 1 // both operations contain only one affected tag
            && firstTag(this.stack[0]) === firstTag(this.stack[1]) // the first (and only) affectedTag of each stack operation is identical
        ) {
            this.logger.warn(`Detected several successive db operation affecting ${firstTag(this.stack[0])}. You might consider grouping the transactions either with a begin/end transaction or by debouncing them.`);
        }
    }

    /**
     * @private
     * @param {StackOperation[]} operations
     * @param {?BatchInserts} batchInserts
     * @return {Promise<void>}
     */
    executeStackOperations(operations, batchInserts) {
        return this.client.transaction(async (trx) => {
            const schema = this.schemaProvider.getSchema();
            for (const knexOp of operations) {
                await knexOp(trx.withSchema(schema));
            }

            // Process batch inserts in case of large transactions.
            if (batchInserts !== null) {
                for (const [table, rows] of batchInserts) {
                    await this.client.batchInsert(`${schema}.${table}`, rows, 500).transacting(trx);
                }
            }

            this.logger.debug(`Transaction with ${operations.length} operations will be commit`);

            return trx;
        }, {isolationLevel: 'serializable'});
    }

    /**
     * @private
     * @param {Operation[]} operations
     * @param {?BatchInserts} batchInserts
     * @return {Promise<[StackOperation[], Set<string>]>}
     */
    async buildStack(operations, batchInserts) {
        // loop over all operations, to ensure the schema is ready for the transaction
        const returnedOperations = [];
        const affectedTags = new Set();
        for (const op of operations) {
            switch(op.type) {
                case 'CREATE':
                    returnedOperations.push(this.create(op.object, op.model, op.properties, batchInserts));
                    affectedTags.add(op.object);
                    break;
                case 'UPDATE':
                    returnedOperations.push(this.update(op.object, op.model, op.properties));
                    affectedTags.add(op.object);
                    break;
                case 'DELETE':
                    returnedOperations.push(this.delete(op.object, op.model));
                    affectedTags.add(op.object);
                    break;
                case 'CREATE_RELATION':
                    returnedOperations.push(this.createRelation(op.relation, op.from, op.to, op.fromModel, op.toModel, batchInserts));
                    affectedTags.add(op.from);
                    affectedTags.add(op.to);
                    break;
                case 'DELETE_RELATION':
                    returnedOperations.push(this.deleteRelation(op.relation, op.from, op.to, op.fromModel, op.toModel));
                    affectedTags.add(op.from);
                    affectedTags.add(op.to);
                    break;
                default:
                    throw new Error(`Transaction error: operation type is unknown: ${op.type}`);
            }
        }
        return [returnedOperations, affectedTags];
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} dataType
     * @param {!Map<string, *>=} properties
     * @param {Map<string, !Array>} batchInserts
     * @return {function(!Knex.QueryBuilder):Knex.QueryBuilder}
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
                return null;
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
                default:
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
        this.schemaProvider.ensureDataType(dataType);
        return (builder) => {
            // Delete the instance itself, auto cascade the deletion of relations.
            const tableName = this.schemaProvider.getTableName(dataType);
            builder.table(tableName).where(COLUMNS.TAG, tag).del();
        };
    }

    /**
     * @private
     * @param {string} relation
     * @param {string} from
     * @param {string} to
     * @param {?string=} fromModel
     * @param {?string=} toModel
     * @param {Map<string, !Array>} batchInserts
     * @return {?function(!Knex.QueryBuilder):Knex.QueryBuilder}
     */
    createRelation(relation, from, to, fromModel, toModel, batchInserts) {
        // Skip model relations => represented through tables containing rows (instances)
        if (relation === CloudObject.modelRel.getTag()) {
            return (_) => null;
        }

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
                return null;
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

        this.schemaProvider.ensureRelation(relation, fromModel, toModel);
        return (builder) => {
            const tableName = this.schemaProvider.getRelationTableName(relation, fromModel, toModel);
            builder.table(tableName).where({ [COLUMNS.FROM]: from, [COLUMNS.TO]: to }).del();
        }
    }

    /**
     * @private
     * @param {string} tableName
     * @param {!Map<string, *>=} properties
     * @return {!Object}
     */
    toObject(tableName, properties) {
        const object = {};
        if (properties) {
            for (const [prop, value] of properties) {
                const colName = this.schemaProvider.getColumn(tableName, prop);
                if (colName !== null) {
                    object[colName] = serializeValue(value, this.schemaProvider.getDBDialectName());
                } else {
                    this.logger.error(`Could not set the property "${prop}" of data type in table "${tableName}"`);
                }
            }
        }
        return object;
    }
}
