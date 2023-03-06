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

export const HEALTH_CHECK_QUERY = 'SELECT 1';

export const QUERY_ALL_TABLES = `
    SELECT 
        rel.relname AS name, 
        obj_description(rel.oid) AS comment
    FROM 
        pg_class rel
    WHERE 
        rel.relkind = 'r' 
        AND rel.relnamespace IN (?::regnamespace) -- schema
`;

export const QUERY_ALL_COLUMNS = `
    SELECT
        att.attname AS name,
        rel.relname AS tableName,
        des.description AS comment
    FROM
        pg_attribute att
        LEFT JOIN pg_class rel ON att.attrelid = rel.oid
        LEFT JOIN pg_description des ON (att.attrelid, att.attnum) = (des.objoid, des.objsubid)
    WHERE
        rel.relnamespace IN (?::regnamespace)   -- schema 
        AND rel.relname = ?                     -- table name
        AND rel.relkind = 'r'
        AND att.attnum > 0
`;

export const QUERY_DATA_TYPE_TABLES = `${QUERY_ALL_TABLES} AND obj_description(rel.oid) LIKE '${SCHEMA_PREFIXES.TYPE}:%'`;
export const QUERY_RELATION_TABLES = `${QUERY_ALL_TABLES} AND obj_description(rel.oid) LIKE '${SCHEMA_PREFIXES.RELATION}:%'`;
export const QUERY_COLUMNS = `${QUERY_ALL_COLUMNS} AND des.description LIKE '${SCHEMA_PREFIXES.PROPERTY}:%'`;

export const SET_COLUMNS_COMMENT = (value) => `COMMENT ON COLUMN ??.??.?? IS '${value}';`;
