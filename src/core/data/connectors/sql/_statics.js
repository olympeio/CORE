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

export const QUERY_ALL_TABLES = `
    SELECT
        class.relname as name,
        obj_description(class.oid) as comment
    FROM pg_class class
        JOIN pg_namespace schema ON class.relnamespace = schema.oid
    WHERE class.relkind = 'r' -- only tables
        AND schema.nspname = ? -- schema
`;

export const QUERY_ALL_COLUMNS = `
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

export const REMOVE_DUPLICATES = `WITH rows AS (
  SELECT "tagOlympeOrig", "tagOlympeDest", ctid
  FROM (
    SELECT "tagOlympeOrig", "tagOlympeDest", row_number() OVER (PARTITION BY "tagOlympeOrig", "tagOlympeDest" ORDER BY "tagOlympeOrig", "tagOlympeDest") AS rn, ctid
    FROM :schema1:.:table1:
  ) AS T2 WHERE T2.rn > 1
)
DELETE FROM :schema1:.:table1:
WHERE ctid IN (SELECT ctid FROM rows);`;

export const QUERY_DATA_TYPE_TABLES = `${QUERY_ALL_TABLES} AND obj_description(class.oid) LIKE '${SCHEMA_PREFIXES.TYPE}:%'`;
export const QUERY_RELATION_TABLES = `${QUERY_ALL_TABLES} AND obj_description(class.oid) LIKE '${SCHEMA_PREFIXES.RELATION}:%'`;
export const QUERY_COLUMNS = `${QUERY_ALL_COLUMNS} AND col_description(class.oid, cols.attnum::int) LIKE '${SCHEMA_PREFIXES.PROPERTY}:%'`;
