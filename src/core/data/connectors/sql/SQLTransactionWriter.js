import {Knex} from 'knex';
import {columns} from "./SQLBuilder";
import {Color} from 'olympe';

export default class SQLTransactionWriter {

    /**
     * @param {!Logger} logger
     * @param {!SchemaObserver} schemaObserver
     */
    constructor(logger, schemaObserver) {

        /**
         * @private
         * @type {!Logger}
         */
        this.logger = logger;

        /**
         * @private
         * @type {!SchemaObserver}
         */
        this.schemaObserver = schemaObserver;

        /**
         * @private
         * @type {(function(!knex.Transaction):!Promise<void>)[]}
         */
        this.stack = [];
    }

    /**
     * Execute the list of operations
     *
     * @param {!Knex} client
     * @param {!Operation[]} operations
     * @return {!Promise<!knex.Transaction>}
     */
    async executeOperations(client, operations) {
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
                    this.stack.push(this.createRelation(op.relation, op.from, op.to, op.fromModel, op.toModel));
                    break;
                default:
            }
        }

        // Wait if schema requires updates
        await this.schemaObserver.waitForFree();

        // Return the promise executing the knex transaction on the database.
        return client.transaction(async (trx) => {
            for (const knexOp of this.stack) {
                await knexOp(trx.withSchema(this.schemaObserver.getSchema()));
            }
            this.logger.debug('Transaction just before commit: ', trx.toString());
            return trx;
        }).finally(() => {
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
     * @return {function(!Knex.Transaction):Promise<void>}
     */
    create(tag, dataType, properties) {
        const table = this.schemaObserver.ensureDataType(dataType, Array.from(properties?.keys() ?? []));
        return (trx) => trx.table(table).insert(this.toObject(tag, dataType, true, properties)).then();
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} dataType
     * @param {!Map<string, *>} properties
     * @return {function(!Knex.Transaction):Promise<void>}
     */
    update(tag, dataType, properties) {
        const table = this.schemaObserver.ensureDataType(dataType, Array.from(properties.keys()));
        return (trx) => trx.table(table).where(columns.TAG, tag).update(this.toObject(tag, dataType, false, properties)).then();
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} dataType
     * @return {function(!Knex.Transaction):Promise<void>}
     */
    delete(tag, dataType) {
        const table = this.schemaObserver.getTable(dataType);
        // Delete the instance itself, auto cascade the deletion of relations.
        return (trx) => table ? trx.table(table).where(columns.TAG, tag).del().then() : Promise.resolve();
    }

    /**
     * @private
     * @param {string} relation
     * @param {string} from
     * @param {string} to
     * @param {string} fromModel
     * @param {string} toModel
     * @return {function(!Knex.Transaction):Promise<void>}
     */
    createRelation(relation, from, to, fromModel, toModel) {
        const table = this.schemaObserver.ensureRelation(relation, fromModel, toModel);
        return (trx) => trx.table(table).insert({ [columns.FROM]: from, [columns.TO]: to }).then();
    }

    /**
     * @private
     * @param {string} relation
     * @param {string} from
     * @param {string} to
     * @param {string} fromModel
     * @param {string} toModel
     * @return {function(!Knex.Transaction):Promise<void>}
     */
    deleteRelation(relation, from, to, fromModel, toModel) {
        const table = this.schemaObserver.getRelation(relation, fromModel, toModel);
        return (trx) => table ? trx.table(table).where({ [columns.FROM]: from, [columns.TO]: to }).del().then() : Promise.resolve();
    }

    /**
     * @private
     * @param {string} tag
     * @param {string} dataType
     * @param {boolean} withTag
     * @param {!Map<string, *>=} properties
     * @return {{"[columns.TAG]"}|{}}
     */
    toObject(tag, dataType, withTag, properties) {
        const object = withTag ? {[columns.TAG]: tag } : {};
        if (properties) {
            for (const [prop, value] of properties) {
                const colName = this.schemaObserver.getColumn(dataType, prop);
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
            serialValue = `${val.getRed()}.${val.getGreen()}.${val.getBlue()}.${val.getAlpha()}`;
        }
        return serialValue;
    }
}
