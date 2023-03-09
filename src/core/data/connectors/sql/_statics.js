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
        allTables.table_name as name,
        obj_description(class.oid) as comment
    FROM information_schema.tables allTables
    JOIN pg_class class
    ON class.relname = allTables.table_name
    WHERE table_schema = ? -- schema
`;

export const QUERY_ALL_COLUMNS = `
    SELECT    cols.column_name as name,    
              cols.table_name as tablename,    
              col_description(class.oid, cols.ordinal_position::int) as comment
    FROM information_schema.columns cols
    JOIN pg_class class ON class.relname = cols.table_name
    WHERE  cols.table_schema = ? AND cols.table_name = ?
`;

export const QUERY_DATA_TYPE_TABLES = `${QUERY_ALL_TABLES} AND obj_description(class.oid) LIKE '${SCHEMA_PREFIXES.TYPE}:%'`;
export const QUERY_RELATION_TABLES = `${QUERY_ALL_TABLES} AND obj_description(class.oid) LIKE '${SCHEMA_PREFIXES.RELATION}:%'`;
export const QUERY_COLUMNS = `${QUERY_ALL_COLUMNS} AND col_description(class.oid, cols.ordinal_position::int) LIKE '${SCHEMA_PREFIXES.PROPERTY}:%'`;

export const SET_COLUMNS_COMMENT = (value) => `COMMENT ON COLUMN ??.??.?? IS '${value}';`;
