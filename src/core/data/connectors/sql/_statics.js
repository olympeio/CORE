// noinspection SqlNoDataSourceInspection

/**
 * Created by Sym on 02.01.2023
 */

import {COLUMNS} from "./SQLQueryExecutor";

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
MSSQL.QUERY_ALL_TABLES=`
    SELECT
        t.name AS name,
        ep.value AS comment
    FROM sys.tables t
         INNER JOIN sys.schemas s ON t.schema_id = s.schema_id
         LEFT JOIN sys.extended_properties ep
               ON ep.major_id = t.object_id
                   AND ep.minor_id = 0
                   AND ep.class = 1
                   AND ep.name = 'MS_Description'
    WHERE s.name = ? -- schema name
`;
MSSQL.QUERY_ALL_COLUMNS=`
    SELECT
        c.name AS name,
        ep.value AS comment
    FROM sys.columns c
         INNER JOIN sys.tables t ON c.object_id = t.object_id
         INNER JOIN sys.schemas s ON t.schema_id = s.schema_id
         LEFT JOIN sys.extended_properties ep
               ON ep.major_id = c.object_id
                   AND ep.minor_id = c.column_id
                   AND ep.class = 1
                   AND ep.name = 'MS_Description'
    WHERE s.name = :schemaName  -- Schema name filter
      AND t.name = :tableName  -- Table name filter
`;
MSSQL.REMOVE_DUPLICATES=`
    WITH DuplicateRows AS (
        SELECT
            tagOlympeOrig,
            tagOlympeDest,
            ROW_NUMBER() OVER (PARTITION BY tagOlympeOrig, tagOlympeDest ORDER BY tagOlympeOrig, tagOlympeDest) AS rn
        FROM [schema1].[table1]
    )
    DELETE FROM [schema1].[table1]
    WHERE EXISTS (
        SELECT 1
        FROM DuplicateRows d
        WHERE d.rn > 1
            AND d.tagOlympeOrig = [table1].tagOlympeOrig
            AND d.tagOlympeDest = [table1].tagOlympeDest
    );
`;

MSSQL.QUERY_DATA_TYPE_TABLES= `${MSSQL.QUERY_ALL_TABLES} AND CAST(ep.value AS NVARCHAR(MAX)) LIKE '${SCHEMA_PREFIXES.TYPE}:%'`;
MSSQL.QUERY_RELATION_TABLES= `${MSSQL.QUERY_ALL_TABLES} AND CAST(ep.value AS NVARCHAR(MAX)) LIKE '${SCHEMA_PREFIXES.RELATION}:%'`;
MSSQL.QUERY_COLUMNS= `${MSSQL.QUERY_ALL_COLUMNS} AND CAST(ep.value AS NVARCHAR(MAX)) LIKE '${SCHEMA_PREFIXES.PROPERTY}:%'`


// bindings for INSERT_REL_IF_NOT_EXIST:
// :schema:, :relationTable:, :tagOlympeOrig, :tagOlympeVal
MSSQL.INSERT_REL_IF_NOT_EXIST = `MERGE into
:schema:.:relationTable: WITH (holdlock)
USING (values (:tagOlympeOrig, :tagOlympeDest)) s([tagOlympeOrig], [tagOlympeDest])
ON :schema:.:relationTable:.[tagOlympeOrig] = s.[tagOlympeOrig] AND :schema:.:relationTable:.[tagOlympeDest] = s.[tagOlympeDest]
WHEN NOT MATCHED THEN
INSERT ([tagOlympeOrig], [tagOlympeDest]) 
VALUES(s.[tagOlympeOrig], s.[tagOlympeDest]);`;

/**
 * bindings for UPSERT:
 * :schema:, :table:, and the properties, which is a list of strings used as binding in the resulting query.
 * @param {string} tag
 * @param {!Array<string>} properties
 * @return {string} The SQL query
 */
MSSQL.UPSERT = (tag, properties) => `MERGE into :schema:.:table: WITH (HOLDLOCK)
USING (values ('${tag}')) s([${COLUMNS.TAG}])
    ON s.[${COLUMNS.TAG}] = :schema:.:table:.[${COLUMNS.TAG}] \n`
    + (properties.length > 0 ?
        ` WHEN MATCHED THEN UPDATE SET ${properties.map((prop) => `[${prop}] = :${prop}`).join(', ')}`
        : '')
    + ` WHEN NOT MATCHED THEN 
    INSERT ([${COLUMNS.TAG}]${properties.length > 0 ? ', ' : ''}${properties.map((prop) => `[${prop}]`).join(', ')}) 
    VALUES ('${tag}'${properties.length > 0 ? ', ' : ''}${properties.map((prop) => `:${prop}`).join(', ')});`;

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
    MYSQL2: 'mysql2',
    MARIADB: 'mysql',
    ORACLE: 'oracledb',
    BETTERSQLITE3: 'sqlite3'
};
export const config = {
    host: 'host',
    port: 'port',
    user: 'user',
    filePath: 'filePath',
    password: 'password',
    database: 'database',
    dbOptions: 'dbOptions',
    schema: 'schema',
    fileConnector: 'fileConnector',
    minConnections: 'minConnections',
    maxConnections: 'maxConnections',
    connectionsTimeout: 'connectionsTimeout',
    schemaDescription: 'schemaDescription',
};
