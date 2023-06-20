// noinspection SqlNoDataSourceInspection

/**
 * Created by Sym on 02.01.2023
 */

/**
 * Constants prefixes used in comments of schema objects (tables and columns) to store tags and olympe specific metadata.
 *
 * @enum {string}
 */
export const SCHEMA_PREFIXES = {
    TYPE: 'type',
    RELATION: 'relation',
    PROPERTY: 'property',
};

export const MAX_NAME_LENGTH = 60;

export const HEALTH_CHECK_QUERY = 'SELECT 1';

const PG = {};
PG.QUERY_ALL_TABLES=`
        SELECT
            class.relname as name,
            obj_description(class.oid) as comment
        FROM pg_class class
            JOIN pg_namespace schema ON class.relnamespace = schema.oid
        WHERE class.relkind = 'r' -- only tables
            AND schema.nspname = ? -- schema
    `;
PG.QUERY_ALL_COLUMNS=`
        SELECT
            cols.attname as name,
            col_description(class.oid, cols.attnum::int) as comment
        FROM pg_attribute cols
            JOIN pg_class class ON cols.attrelid = class.oid
            JOIN pg_namespace schema ON class.relnamespace = schema.oid
        WHERE class.relkind = 'r' -- class must be tables
            AND cols.attnum > 0 -- avoid system columns (index <= 0)
            AND schema.nspname = :schemaName -- schema
            AND class.relname = :tableName -- table name filter
    `;
PG.REMOVE_DUPLICATES=`WITH rows AS (
      SELECT "tagOlympeOrig", "tagOlympeDest", ctid
      FROM (
        SELECT "tagOlympeOrig", "tagOlympeDest", row_number() OVER (PARTITION BY "tagOlympeOrig", "tagOlympeDest" ORDER BY "tagOlympeOrig", "tagOlympeDest") AS rn, ctid
        FROM :schema1:.:table1:
      ) AS T2 WHERE T2.rn > 1
    )
    DELETE FROM :schema1:.:table1:
    WHERE ctid IN (SELECT ctid FROM rows);`;

PG.QUERY_DATA_TYPE_TABLES= `${PG.QUERY_ALL_TABLES} AND obj_description(class.oid) LIKE '${SCHEMA_PREFIXES.TYPE}:%'`;
PG.QUERY_RELATION_TABLES= `${PG.QUERY_ALL_TABLES} AND obj_description(class.oid) LIKE '${SCHEMA_PREFIXES.RELATION}:%'`;
PG.QUERY_COLUMNS= `${PG.QUERY_ALL_COLUMNS} AND col_description(class.oid, cols.attnum::int) LIKE '${SCHEMA_PREFIXES.PROPERTY}:%'`
export {PG};

const MSSQL = {};
// bindings for INSERT_REL_IF_NOT_EXIST:
// :schema:, :relationTable:, :tagOlympeOrig, :tagOlympeVal
MSSQL.INSERT_REL_IF_NOT_EXIST = `MERGE into
:schema:.:relationTable: WITH (holdlock)
USING (values (:tagOlympeOrig, :tagOlympeDest)) s([tagOlympeOrig], [tagOlympeDest])
ON :schema:.:relationTable:.[tagOlympeOrig] = s.[tagOlympeOrig] AND :schema:.:relationTable:.[tagOlympeDest] = s.[tagOlympeDest]
WHEN NOT MATCHED THEN
INSERT ([tagOlympeOrig], [tagOlympeDest]) 
VALUES(s.[tagOlympeOrig], s.[tagOlympeDest]);
`
export {MSSQL};
/**
 * Constant names for all possible data sources dialect names
 *
 * @enum {string}
 */
export const DB_DIALECT_NAMES = {
    POSTGRES: 'pg',
    REDSHIFT: 'pg',
    COCKROACHDB: 'pg',
    SQLITE3: 'sqlite3',
    MSSQL: 'mssql',
    MYSQL: 'mysql',
    MARIADB: 'mysql',
    ORACLE: 'oracledb'
};
export const config = {
    host: 'host',
    port: 'port',
    user: 'user',
    password: 'password',
    database: 'database',
    dbOptions: 'dbOptions',
    schema: 'schema',
    minConnections: 'minConnections',
    maxConnections: 'maxConnections',
    connectionsTimeout: 'connectionsTimeout',
};
