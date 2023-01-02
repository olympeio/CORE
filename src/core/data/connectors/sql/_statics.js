/**
 * Created by Sym on 02.01.2023
 */

export const HEALTH_CHECK_QUERY = 'SELECT 1';

export const QUERY_TABLES = `
    SELECT 
        rel.relname AS name, 
        obj_description(rel.oid) AS tag
    FROM 
        pg_class rel
    WHERE 
        rel.relkind = 'r' 
        AND rel.relnamespace IN (?::regnamespace); -- schema
`;

export const QUERY_COLUMNS = `
    SELECT
        att.attname AS name,
        rel.relname AS tableName,
        des.description AS tag
    FROM
        pg_attribute att
        LEFT JOIN pg_class rel ON att.attrelid = rel.oid
        LEFT JOIN pg_description des ON (att.attrelid, att.attnum) = (des.objoid, des.objsubid)
    WHERE
        rel.relnamespace IN (?::regnamespace)   -- schema 
        AND rel.relname = ?                     -- table name
        AND rel.relkind = 'r'
        AND att.attnum > 0;
`;
