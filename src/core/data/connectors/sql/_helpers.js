import { Color } from 'olympe';
import {DB_DIALECT_NAMES, MSSQL, PG} from './_statics';
import {Knex} from "knex";

/**
 * @param {string | number | boolean | !Date | !Color} val
 * @param {string} dialect
 * @return {string | number | boolean | Object}
 */
export function serializeValue(val, dialect) {
    let serialValue = val;
    // non primitive types
    if (val instanceof Date) {
        serialValue = val.toJSON();
    } else if (val instanceof Color) {
        serialValue = `${val.getRed()};${val.getGreen()};${val.getBlue()};${val.getAlpha()}`;
    } else if (typeof val === 'boolean') {
        // sqlite, mssql (azure), mysql and oracle use (bit) number
        // only postgres accept boolean value as true, false
        // we support number values but not any string representation
        // implicit deserialization transform 0 to false, 1 to true
        if (dialect !== DB_DIALECT_NAMES.POSTGRES) {
            serialValue = Number(val);
        }
    }
    return serialValue;
}

/**
 * @param {!Knex} client the knex client
 * @param {string} dialect the dialect currently in use
 * @param {string} sqlCode the request code
 * @param {Object | Array} bindings to inject into the request
 * @param {function(!Knex.QueryBuilder):Promise<*>} executor used to execute the query
 * @return {Promise<[string, string][]>}
 */
export const queryKnex = async (client, dialect, sqlCode, bindings, executor) => {

    let query;
    switch (dialect) {
        case DB_DIALECT_NAMES.MSSQL: query = MSSQL[sqlCode]; break;
        default: query = PG[sqlCode];
    }

    let response = await executor(client.raw(query, bindings));
    let rows;
    switch (dialect) {
        case DB_DIALECT_NAMES.MSSQL: rows = response; break;
        default: rows = response?.rows;
    }
    return rows ?? [];
}

/**
 * @template T
 * @param {function(...*):Promise<T>} action
 * @param {(typeof Error)[]} errors
 * @param {number=} retries
 * @return {Promise<T>}
 */
export const retryOnError = async (action, errors, retries = 3) => {
    let attempt = 0;
    let error;
    while (attempt < retries) {
        try {
            return await action();
        } catch (e) {
            error = e;
            if (!errors.some((errorType) => e instanceof errorType)) {
                throw e;
            }
        }
        attempt++;
    }
    throw error;
}