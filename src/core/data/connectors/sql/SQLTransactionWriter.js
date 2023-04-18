import {Knex} from 'knex';
import {COLUMNS} from "./SQLQueryExecutor";
import {CloudObject, Color, Operation} from 'olympe';

export default class SQLTransactionWriter {

    /**
     * @param {!log.Logger} logger
     * @param {!Knex} client
     * @param {!SchemaObserver} schemaObserver
     */
    constructor(logger, client, schemaObserver) {

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
         * @type {!SchemaObserver}
         */
        this.schemaObserver = schemaObserver;

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
        await this.schemaObserver.waitForFree();

        // Return the promise executing the knex transaction on the database.
        return this.client.transaction(async (trx) => {
            const schema = this.schemaObserver.getSchema();
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
        const table = this.schemaObserver.ensureDataType(dataType, Array.from(properties?.keys() ?? []));
        return (trx) => trx.table(table.getName()).insert(this.toObject(tag, dataType, true, properties)).onConflict(COLUMNS.TAG).merge().then();
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} dataType
     * @param {!Map<string, *>} properties
     * @return {function(!Knex.Transaction):!Promise<void>}
     */
    update(tag, dataType, properties) {
        const table = this.schemaObserver.ensureDataType(dataType, Array.from(properties.keys()));
        return (trx) => trx.table(table.getName()).where(COLUMNS.TAG, tag).update(this.toObject(tag, dataType, false, properties)).then();
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} dataType
     * @return {function(!Knex.Transaction):!Promise<void>}
     */
    delete(tag, dataType) {
        const table = this.schemaObserver.getTable(dataType);
        // Delete the instance itself, auto cascade the deletion of relations.
        return (trx) => table ? trx.table(table.getName()).where(COLUMNS.TAG, tag).del().then() : Promise.resolve();
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
        const table = this.schemaObserver.ensureRelation(relation, fromModel, toModel);
        return (trx) => trx.table(table.getName()).insert({ [COLUMNS.FROM]: from, [COLUMNS.TO]: to }).onConflict().ignore().then();
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
        const table = this.schemaObserver.getRelationTable(relation, fromModel, toModel);
        return (trx) => table ? trx.table(table.getName()).where({ [COLUMNS.FROM]: from, [COLUMNS.TO]: to }).del().then() : Promise.resolve();
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
        const table = this.schemaObserver.getTable(dataType);
        if (properties) {
            for (const [prop, value] of properties) {
                const colName = table.getColumn(prop);
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
