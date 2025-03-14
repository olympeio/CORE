import {DataSource, register} from 'olympe';
import {getLogger} from 'logging';
import {knex, Knex} from 'knex';
import {HEALTH_CHECK_QUERY, config} from './sql/_statics';
import SchemaObserver from './sql/schema/SchemaObserver';
import SchemaReader from './sql/schema/SchemaReader';
import SQLQueryExecutor, {COLUMNS} from './sql/SQLQueryExecutor';
import SQLTransactionWriter from './sql/SQLTransactionWriter';
import FileConnectorsRegistry from './fileconnector/FileConnectorsRegistry';

export default class MSSQLConnector extends DataSource {

    constructor(...args) {
        super(...args);

        /**
         * @private
         * @type {Knex}
         */
        this.knex = null;

        /**
         * @private
         * @type {log.Logger}
         */
        this.logger = getLogger('mssql');

        /**
         * @private
         * @type {SchemaProvider}
         */
        this.schemaProvider = this.getConfig(config.schemaDescription) ? new SchemaReader(this.logger) : new SchemaObserver(this.logger);

        /**
         * @private
         * @type {SQLTransactionWriter}
         */
        this.writer = null;

        /**
         * @private
         * @type {?FileConnector}
         */
        this.fileConnector = null;
    }

    /**
     * @override
     */
    async init(context) {
        this.logger.info(`Initialization of MSSQLConnector ${this.getId()}...`);
        const host = this.getConfig(config.host) ?? 'localhost';
        const database = this.getConfig(config.database);
        const schema = this.getConfig(config.schema);

        if (database === null || schema === null) {
            const errorMsg = 'Config error: Database or schema is null.\n' +
                `Note that this data connector looks for config from either data.${this.name().toLowerCase().replace(/\W/g, '_')} or data.`;
            throw new Error(errorMsg);
        }

        if (this.knex !== null) {
            await this.knex.destroy();
        }
        this.knex = knex({
            client: 'mssql',
            connection: {
                host: host,
                user: this.getConfig(config.user),
                password: this.getConfig(config.password),
                options: {
                    port: this.getConfig(config.port) ?? 1433,
                    database: database,
                    // required for mssql
                    encrypt: true,
                    ...this.getConfig(config.dbOptions)
                }
            },
            pool: {
                min: this.getConfig(config.minConnections) ?? 0,
                max: this.getConfig(config.maxConnections) ?? 10,
            },
            acquireConnectionTimeout: this.getConfig(config.connectionsTimeout) ?? 10000,
        });

        // Initialize the writer
        this.writer = new SQLTransactionWriter(this.logger, this.knex, this.schemaProvider);

        // Determine the file connector based on the filePath or fileConnector.
        const fileConnectorId = this.getConfig(config.filePath)
            ? 'fileSystem'
            : this.getConfig(config.fileConnector) || null;

        // Set the file connector.
        this.fileConnector = fileConnectorId
            ? FileConnectorsRegistry.get(fileConnectorId, this.getConfig.bind(this))
            : null;

        // Check the connection to SQL database is established
        await this.healthCheck();
        this.logger.info(`MSSQL Connector ${this.getId()} started with host ${host},
         database ${database} on schema ${schema}`);

        // Initialize the schema observer that fulfill the cache
        // with all the existing tables with their associated data types.
        if (this.schemaProvider instanceof SchemaReader) {
            const schemaDesc = this.getConfig(config.schemaDescription);
            if (!(schemaDesc instanceof Object)) {
                throw new Error(`No schema description found for the data source ${this.getId()}. Please ensure the "schemaDescription" parameter has an Object value.`);
            }
            await this.schemaProvider.init(this.knex, schema, schemaDesc);
        } else {
            await this.schemaProvider.init(this.knex, schema);
        }
        this.logger.info(`Schema of MSSql connector ${this.getId()} has been initialized`);
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
        const executor = new SQLQueryExecutor(this.logger, this.knex, this.schemaProvider);
        return await executor.executeQuery(query);
    }

    /**
     * @override
     */
    applyTransaction(operations, { batch = false }) {
        return this.writer ? this.writer.applyOperations(operations, batch) : Promise.reject('Writer is not ready, you probably need to call init() first');
    }

    /**
     * @override
     */
    async uploadFileContent(fileTag, dataType, binary) {
        if(this.fileConnector !== null) {
            return this.fileConnector.uploadFileContent(fileTag, dataType, binary);
        }

        const properties = new Map([[COLUMNS.FILE_CONTENT, binary]]);
        await this.applyTransaction([{ type: 'CREATE', object: fileTag, model: dataType, properties }], {});
    }

    /**
     * @override
     */
    async downloadFileContent(fileTag, dataType) {
        if(this.fileConnector !== null) {
            return this.fileConnector.downloadFileContent(fileTag, dataType);
        }

        const executor = new SQLQueryExecutor(this.logger, this.knex, this.schemaProvider);
        return await executor.downloadFileContent(fileTag, dataType);
    }

    /**
     * @override
     */
    async deleteFileContent(fileTag, dataType) {
        if(this.fileConnector !== null) {
            return this.fileConnector.deleteFileContent(fileTag, dataType);
        }

        const properties = new Map([[COLUMNS.FILE_CONTENT, null]]);
        await this.applyTransaction([{ type: 'UPDATE', object: fileTag, model: dataType, properties }], {});
    }
}
register('01888ba7faaacebdb63b', MSSQLConnector);
