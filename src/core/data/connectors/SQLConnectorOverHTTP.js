import { DataSource, register } from 'olympe';
import {knex, Knex} from 'knex';
import {getLogger} from "logging";
import SchemaReader from "./sql/schema/SchemaReader";
import {DB_DIALECT_NAMES, MSSQL} from "./sql/_statics";
import SQLQueryExecutor, {COLUMNS} from "./sql/SQLQueryExecutor";
import SQLTransactionWriter from "./sql/SQLTransactionWriter";
import {config} from "./sql/_statics";

const httpConfig = {
    ssl: 'ssl',
    path: 'path',
    authHeaders: 'authHeaders',
    dialect: 'dialect',
};

export default class SQLConnectorOverHTTP extends DataSource {

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
        this.logger = getLogger('httpSql');

        /**
         * @private
         * @type {!SchemaReader}
         */
        this.schemaReader = new SchemaReader(this.logger);

        /**
         * @private
         * @type {?string}
         */
        this.url = null;

        /**
         * @private
         * @type {!Object<string>}
         */
        this.authHeaders = {};

        /**
         * @private
         * @type {SQLTransactionWriter}
         */
        this.writer = null;
    }

    /**
     * @override
     */
    async init(context) {
        this.logger.info(`Initialization of SQL Over HTTP Connector: ${this.getId()}...`);
        const host = this.getConfig(config.host);
        const port = this.getConfig(config.port) ?? 443;
        const ssl = this.getConfig(httpConfig.ssl) ?? port === 443;
        const path = this.getConfig(httpConfig.path) ?? '/data';
        this.authHeaders = this.getConfig(httpConfig.authHeaders) ?? {};
        const dialect = this.getConfig(httpConfig.dialect)?.toLowerCase();
        const schema = this.getConfig(config.schema);
        const schemaDesc = this.getConfig(config.schemaDescription);

        const validDialects = Array.from(Object.values(DB_DIALECT_NAMES));
        if (!validDialects.includes(dialect)) {
            const errorMsg = `Config error: specified dialect: ${dialect} is not a valid dialect: ${validDialects.join(', ')}.\n` +
                `Note that this data connector looks for config from either data.${this.name().toLowerCase().replace(/\W/g, '_')} or data.`;
            throw new Error(errorMsg);
        }

        if (schema === null) {
            const errorMsg = 'Config error: Schema is null.\n' +
                `Note that this data connector looks for config from either data.${this.name().toLowerCase().replace(/\W/g, '_')} or data.`;
            throw new Error(errorMsg);
        }

        if (!(schemaDesc instanceof Object)) {
            throw new Error(`No schema description found for the data source ${this.getId()}. Please ensure the "schemaDescription" parameter has an Object value.`);
        }

        this.url = new URL(path.replace(/\/+/g, '/'), `${ssl ? 'https' : 'http'}://${host}:${port}`).href;

        // Take the proper dialect to build the SQL strings
        this.knex = knex({client: dialect});
        this.logger.info(`HTTP SQL Connector ${this.getId()} started to send queries of dialect ${dialect} to ${this.url}, on schema ${schema}`);

        // Initialize the schema observer that fulfill the cache
        // with all the existing tables with their associated data types.
        await this.schemaReader.init(this.knex, schema, schemaDesc);
        this.logger.info(`Schema of HTTP SQL connector ${this.getId()} has been initialized.`);

        // Initialize the writer
        this.writer = new SQLTransactionWriter(this.logger, this.knex, this.schemaReader).delegateExecution((operations) => {
            // default executor sends request over POST
            return this.sendHTTPRequest('POST', 'transaction', operations);
        });
    }

    /**
     * @override
     */
    async healthCheck() {
        await this.sendHTTPRequest('GET', 'healthcheck');
    }

    /**
     * @override
     */
    async executeQuery(query) {
        const executor = new SQLQueryExecutor(this.logger, this.knex, this.schemaReader).delegateExecution((builder) => {
            return this.sendHTTPRequest('POST', 'query', builder.toString()).then((response) => response.json());
        });
        return await executor.executeQuery(query);
    }

    /**
     * @override
     */
    applyTransaction(operations, options) {
        return this.writer ? this.writer.applyOperations(operations, false, true) : Promise.reject('Writer is not ready, you probably need to call init() first');
    }

    /**
     * @override
     */
    async uploadFileContent(fileTag, dataType, binary) {
        const tableName = this.schemaReader.getTablesOfType(dataType, false)?.[0];

        if (typeof tableName !== 'string') {
            throw new Error(`Table not found in schema reader for data type: ${dataType}`);
        }

        const schema = this.schemaReader.getSchema();
        const sql = this.schemaReader.getDBDialectName() === DB_DIALECT_NAMES.MSSQL
            ? MSSQL.UPSERT(fileTag, [COLUMNS.FILE_CONTENT])
            : `INSERT INTO "${schema}"."${tableName}" ("${COLUMNS.TAG}", "${COLUMNS.FILE_CONTENT}") VALUES ('${fileTag}', :binary) ON CONFLICT ("${COLUMNS.TAG}") DO UPDATE SET "${COLUMNS.FILE_CONTENT}" = :binary, "${COLUMNS.TAG}" = '${fileTag}'`;

        await this.sendHTTPRequest('PUT', `file?sql=${encodeURIComponent(sql)}`, binary);
    }

    /**
     * @override
     */
    async downloadFileContent(fileTag, dataType) {
        const tableName = this.schemaReader.getTablesOfType(dataType, false)?.[0];

        if (typeof tableName !== 'string') {
            throw new Error(`Table not found in schema reader for data type: ${dataType}`);
        }

        const sql = this.knex.queryBuilder().withSchema(this.schemaReader.getSchema())
            .from(tableName)
            .select({'binary': COLUMNS.FILE_CONTENT})
            .where(COLUMNS.TAG, fileTag)
            .toString();

        const response = await this.sendHTTPRequest('GET', `file?sql=${encodeURIComponent(sql)}`);
        const buffer = await response.arrayBuffer();
        return new Uint8Array(buffer, 0, buffer.byteLength);
    }

    /**
     * @override
     */
    deleteFileContent(fileTag, dataType) {
        const properties = new Map([[COLUMNS.FILE_CONTENT, null]]);
        const operations = [{ type: 'UPDATE', object: fileTag, model: dataType, properties }];
        return this.writer ? this.writer.applyOperations(operations, false, true, (operations) => {
            // delete executor sends request over DELETE
            return this.sendHTTPRequest('DELETE', 'transaction', operations[0]);
        }) : Promise.reject('Writer is not ready, you probably need to call init() first');
    }

    /**
     * @private
     * @param {string} method
     * @param {string} path
     * @param {(string | !Uint8Array | !Array)=} content
     * @return {Promise<!Response>}
     */
    async sendHTTPRequest(method, path, content) {
        const headers = { ...this.authHeaders };
        let body = content;
        if (typeof content === 'string') {
            headers['contentType'] = 'plain/text';
        } else if (content instanceof Uint8Array) {
            headers['contentType'] = 'application/octet-stream';
        } else if (content instanceof Array) {
            headers['contentType'] = 'application/json';
            body = JSON.stringify(content);
        }

        const response = await fetch(`${this.url}/${path}`, { method, body, headers });
        if (!response.ok) {
            const body = await response.json();
            throw new Error(`Error while sending request to the database, received code ${response.status} (${response.statusText}): ${JSON.stringify(body)}`);
        }
        return response;
    }
}

register('0189d917e86e6d0b7154', SQLConnectorOverHTTP);
