import {DataSource, register} from 'olympe';
import {knex, Knex} from 'knex';
import {getLogger} from "logging";
import SQLQueryExecutor, {COLUMNS} from "./sql/SQLQueryExecutor";
import SchemaObserver from "./sql/SchemaObserver";
import {HEALTH_CHECK_QUERY} from "./sql/_statics";
import SQLTransactionWriter from "./sql/SQLTransactionWriter";

const config = {
    host: 'host',
    port: 'port',
    user: 'user',
    password: 'password',
    database: 'database',
    schema: 'schema',
    minConnections: 'minConnections',
    maxConnections: 'maxConnections',
    connectionsTimeout: 'connectionsTimeout',
};

export default class PostgreSQLConnector extends DataSource {

    constructor(...args) {
        super(...args);

        /**
         * @private
         * @type {Knex}
         */
        this.knex = null;

        /**
         * @private
         * @type {!log.Logger}
         */
        this.logger = getLogger('sql');

        /**
         * @private
         * @type {!SchemaObserver}
         */
        this.schemaObserver = new SchemaObserver(this.logger);
    }

    /**
     * @override
     */
    async init() {
        this.logger.info(`Initialization of SQLConnector ${this.getId()}...`);
        const host = this.getConfig(config.host) ?? 'localhost';
        const database = this.getConfig(config.database);
        const schema = this.getConfig(config.schema);

        if (database === null || schema === null) {
            const errorMsg = 'Config error: Database or Schema is null.\n' +
            `Note that this data connector look for config from either data.${this.name().toLowerCase().replace(/\W/g, '_')}, data.${this.getTag()} or data.`;
            throw new Error(errorMsg);
        }

        if (this.knex !== null) {
            await this.knex.destroy();
        }

        this.knex = knex({
            client: 'pg',
            connection: {
                host: host,
                port: this.getConfig(config.port) ?? 5432,
                user: this.getConfig(config.user),
                password : this.getConfig(config.password),
                database: database,
            },
            pool: {
                min: this.getConfig(config.minConnections) ?? 0,
                max: this.getConfig(config.maxConnections) ?? 10,
            },
            acquireConnectionTimeout: this.getConfig(config.connectionsTimeout) ?? 10000,
        });

        // Check the connection to SQL database is established
        await this.healthCheck();
        this.logger.info(`SQLConnector ${this.getId()} started with host ${host}, database ${database} on schema ${schema}`);

        // Subscribe to the data model handled by this data source
        await new Promise((done, fail) => {
            let first = true;
            this.observeDataTypes().subscribe((dataTypes) => {
                this.logger.debug(`Data source ${this.name()} should handle ${dataTypes.size()} data types`);

                // Wait for the first result to arrive before validate the schema the first time.
                if (first) {
                    this.schemaObserver.init(this.knex, schema).then(done).catch(fail);
                    first = false;
                }
            });
        });
        this.logger.info(`Schema of SQLConnector ${this.getId()} has been initialized`);
    }

    /**
     * @override
     */
    async healthCheck() {
        if (this.knex === null) {
            throw new Error('SQL Connector: No knex client');
        }

        await this.knex.raw(HEALTH_CHECK_QUERY);
    }

    /**
     * @override
     */
    async destroy() {
        if (this.knex !== null) {
            await this.knex.destroy();
            this.knex = null;
        }
    }

    /**
     * @override
     */
    async executeQuery(query) {
        const executor = new SQLQueryExecutor(this.logger, this.knex, this.schemaObserver);
        return await executor.executeQuery(query);
    }

    /**
     * @override
     */
    async applyTransaction(operations) {
        const writer = new SQLTransactionWriter(this.logger, this.knex, this.schemaObserver);
        await writer.applyOperations(operations);
    }

    /**
     * @override
     */
    async uploadFile(fileTag, dataType, binary) {
        const properties = new Map([[COLUMNS.FILE_CONTENT, binary]]);
        await this.applyTransaction([{type: 'CREATE', object: fileTag, model: dataType, properties}]);
    }

    /**
     * @override
     */
    async downloadFile(fileTag, dataType) {
        const executor = new SQLQueryExecutor(this.logger, this.knex, this.schemaObserver);
        return await executor.downloadFileContent(fileTag, dataType);
    }

    /**
     * @override
     */
    async deleteFile(fileTag, dataType) {
        const properties = new Map([[COLUMNS.FILE_CONTENT, null]]);
        await this.applyTransaction([{type: 'UPDATE', object: fileTag, model: dataType, properties}]);
    }
}

register('0185afa35a6a1a5c37e6', PostgreSQLConnector);
