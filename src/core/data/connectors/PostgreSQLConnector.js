import { DataSource, register } from 'olympe';
import {knex, Knex} from 'knex';
import {getLogger} from "logging";
import SchemaObserver from "./sql/SchemaObserver";
import {HEALTH_CHECK_QUERY} from "./sql/_statics";

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
    init() {
        this.logger.info(`Initialization of SQLConnector ${this.getId()}...`);
        const host = this.getConfig(config.host) ?? 'localhost';
        const database = this.getConfig(config.database);
        const schema = this.getConfig(config.schema);

        if (this.knex !== null) {
            this.knex.destroy().then();
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
        })

        return this.healthCheck().then(() => {
            this.logger.info(`SQLConnector ${this.getId()} started with host ${host}, database ${database} on schema ${schema}`);
            return this.schemaObserver.init(this.knex, schema);
        }).then(() => {
            this.logger.info(`Schema of SQLConnector ${this.getId()} has been initialized`);
        });
    }

    /**
     * @override
     */
    healthCheck() {
        if (this.knex === null) {
            return Promise.reject('SQL Connector: No knex client');
        }

        return this.knex.raw(HEALTH_CHECK_QUERY).then();
    }

    /**
     * @override
     */
    destroy() {
        if (this.knex !== null) {
            return this.knex.destroy().then(() => {
                this.knex = null;
            });
        }
        return Promise.resolve();
    }

    /**
     * @override
     */
    executeQuery(query) {
        // TODO: to be completed.
    }
}

register('01857d11d2f7e15cc7af', PostgreSQLConnector);
