import {DataSource, register, tagToString, File as OFile} from 'olympe';
import {knex, Knex} from 'knex';
import {getLogger} from "logging";
import SQLQueryExecutor, {COLUMNS} from "./sql/SQLQueryExecutor";
import SchemaObserver from "./sql/schema/SchemaObserver";
import {HEALTH_CHECK_QUERY, config} from "./sql/_statics";
import SQLTransactionWriter from "./sql/SQLTransactionWriter";
import FileConnectorsRegistry from './fileconnector/FileConnectorsRegistry';

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

        /**
         * @private
         * @type {SQLTransactionWriter}
         */
        this.writer = null;

        /**
         * @private
         * @type {?string}
         */
        this.filePath = this.getConfig(config.filePath);

        /**
         * @private
         * @type {?FileConnector}
         */
        this.fileConnector = null;
    }

    /**
     * @override
     */
    async init(_context) {
        this.logger.info(`Initialization of PostgresqlConnector ${this.getId()}...`);
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

        // Initialize the writer
        this.writer = new SQLTransactionWriter(this.logger, this.knex, this.schemaObserver);

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
        this.logger.info(`SQLConnector ${this.getId()} started with host ${host}, database ${database} on schema ${schema}`);

        // Initialize the schema observer that fulfill the cache with all the existing tables with their associated data types.
        await this.schemaObserver.init(this.knex, schema);
        this.logger.info(`Schema of SQLConnector ${this.getId()} has been initialized`);

        if (this.getConfig('moveFilesToVolume') && this.getConfig(config.filePath)) {
            this.migrateFiles().catch((e) => {
                this.logger.error(`Error while migrating files to file-service: ${e}`);
            });
        }
    }

    /**
     * @private
     * @return {Promise<void>}
     */
    async migrateFiles() {
        this.logger.info('Migrating files...');
        const {FILE_CONTENT, TAG} = COLUMNS;
        const schema = this.schemaObserver.getSchema();
        const fileModelTag = tagToString(OFile);
        const tableName = this.schemaObserver.getTableName(fileModelTag);
        try {
            const fileList = await this.knex.queryBuilder().withSchema(schema).from(tableName).select(TAG);
            this.logger.info(`Detected ${fileList.length} files`);
            for (let i = 0; i < fileList.length; i++) {
                const fileTag = fileList[i][TAG];
                const file = await this.knex.queryBuilder().withSchema(schema).from(tableName).select(FILE_CONTENT).where(TAG, fileTag);
                const content = file[0][FILE_CONTENT];
                if (content instanceof Uint8Array) {
                    typeof this.filePath === 'string' && await this.uploadFileContent(fileTag, fileModelTag, content);
                    this.logger.info(`Processed file ${fileTag} (${i+1}/${fileList.length}), size: ${content.byteLength}`);
                } else {
                    this.logger.info(`Processed file ${fileTag} (${i+1}/${fileList.length}), NO CONTENT`);
                }
            }
            this.logger.info(`Finished`);
        } catch(e) {
            this.logger.error(`Error while migrating files: ${e}`);
        }
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

        const executor = new SQLQueryExecutor(this.logger, this.knex, this.schemaObserver);
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

register('0185afa35a6a1a5c37e6', PostgreSQLConnector);
