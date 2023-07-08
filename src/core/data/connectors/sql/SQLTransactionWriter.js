import {Knex} from 'knex';
import {COLUMNS} from "./SQLQueryExecutor";
import {CloudObject, Color, Operation} from 'olympe';
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
         * @type {(function(!Knex.Transaction):!Promise<void>)[]}
         */
        this.stack = [];
    }

    /**
     * Execute the list of operations
     *
     * @param {Operation[]} operations
     * @return {!Promise<void>}
     */
    async applyOperations(operations) {
        // loop over all operations, to ensure the schema is ready for the transaction
        for (const op of operations) {
            switch(op.type) {
                case 'CREATE':
                    this.stack.push(this.create(op.object, op.model, op.properties));
                    break;
                case 'UPDATE':
                    this.stack.push(this.update(op.object, op.model, op.properties));
                    break;
                case 'DELETE':
                    this.stack.push(this.delete(op.object, op.model));
                    break;
                case 'CREATE_RELATION':
                    this.stack.push(this.createRelation(op.relation, op.from, op.to, op.fromModel, op.toModel));
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

        // Return the promise executing the knex transaction on the database.
        return this.client.transaction(async (trx) => {
            const schema = this.schemaProvider.getSchema();
            for (const knexOp of this.stack) {
                await knexOp(trx.withSchema(schema));
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
     * @private
     * @param {string} tag
     * @param {string} dataType
     * @param {!Map<string, *>=} properties
     * @return {function(!Knex.Transaction):!Promise<void>}
     */
    create(tag, dataType, properties) {
        this.schemaProvider.ensureDataType(dataType, Array.from(properties?.keys() ?? []));
        return (trx) => {
            let insertTx = trx.table(this.schemaProvider.getTableName(dataType)).insert(this.toObject(tag, dataType, true, properties));
            switch (this.schemaProvider.getDBDialectName()) {
                case DB_DIALECT_NAMES.POSTGRES:
                case DB_DIALECT_NAMES.MYSQL:
                case DB_DIALECT_NAMES.SQLITE3:
                    // for cross-platform support between these 3 dialects, the conflict column has to be specified,
                    // the specified conflict column has to be a PRIMARY KEY
                    insertTx = insertTx.onConflict(COLUMNS.TAG).merge();
                    break;
            }
            return insertTx.then();
        }
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} dataType
     * @param {!Map<string, *>} properties
     * @return {function(!Knex.Transaction):!Promise<void>}
     */
    update(tag, dataType, properties) {
        this.schemaProvider.ensureDataType(dataType, Array.from(properties.keys()));
        return (trx) => trx.table(this.schemaProvider.getTableName(dataType)).where(COLUMNS.TAG, tag).update(this.toObject(tag, dataType, false, properties)).then();
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} dataType
     * @return {function(!Knex.Transaction):!Promise<void>}
     */
    delete(tag, dataType) {
        const tableName = this.schemaProvider.getTableName(dataType);
        // Delete the instance itself, auto cascade the deletion of relations.
        return (trx) => tableName ? trx.table(tableName).where(COLUMNS.TAG, tag).del().then() : Promise.resolve();
    }

    /**
     * @private
     * @param {string} relation
     * @param {string} from
     * @param {string} to
     * @param {?string=} fromModel
     * @param {?string=} toModel
     * @return {function(!Knex.Transaction):!Promise<void>}
     */
    createRelation(relation, from, to, fromModel, toModel) {
        // Skip model relations => represented through tables containing rows (instances)
        if (relation === CloudObject.modelRel.getTag()) {
            return (_) => Promise.resolve();
        }
        if (typeof fromModel !== 'string' || typeof toModel !== 'string') {
            throw new Error(`SQL connector: invalid transaction: missing origin or destination model to create the relation ${from}-[${relation}]->${to}`);
        }
        this.schemaProvider.ensureRelation(relation, fromModel, toModel);
        return (trx) => {
            let insertTx =  trx.table(this.schemaProvider.getRelationTableName(relation, fromModel, toModel)).insert({ [COLUMNS.FROM]: from, [COLUMNS.TO]: to });
            switch (this.schemaProvider.getDBDialectName()) {
                case DB_DIALECT_NAMES.MSSQL:
                    insertTx = trx.client.raw(
                        MSSQL.INSERT_REL_IF_NOT_EXIST,
                        {
                            schema : this.schemaProvider.getSchema(),
                            relationTable :this.schemaProvider.getRelationTableName(relation, fromModel, toModel),
                            tagOlympeOrig: from,
                            tagOlympeDest: to,
                        }
                    );
                    break;
                case DB_DIALECT_NAMES.POSTGRES:
                case DB_DIALECT_NAMES.MYSQL:
                case DB_DIALECT_NAMES.SQLITE3:
                default:
                    insertTx = insertTx.onConflict().ignore();
                    break;
            }
            return insertTx.then();
        }
    }

    /**
     * @private
     * @param {string} relation
     * @param {string} from
     * @param {string} to
     * @param {?string=} fromModel
     * @param {?string=} toModel
     * @return {function(!Knex.Transaction):!Promise<void>}
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
        return (trx) => tableName ? trx.table(tableName).where({ [COLUMNS.FROM]: from, [COLUMNS.TO]: to }).del().then() : Promise.resolve();
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} dataType
     * @param {boolean} withTag
     * @param {!Map<string, *>=} properties
     * @return {!Object}
     */
    toObject(tag, dataType, withTag, properties) {
        const object = withTag ? {[COLUMNS.TAG]: tag } : {};
        if (properties) {
            for (const [prop, value] of properties) {
                const tableName = this.schemaProvider.getTableName(dataType);
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
