import {Knex} from "knex";
import {MAX_NAME_LENGTH} from '../_statics';
import {jenkinsOneAtATimeHash} from '../../../../../helpers/common/hash';
/**
 * @interface
 */
export default class SchemaProvider {

    /**
     * Initialize the schema reader with knex client to retrieve starting schema information

     * @param {!Knex} client
     * @param {string} schema
     * @param {...*} args
     * @return {Promise<void>}
     */
    init(client, schema, ...args) {
        /* empty */
    }

    /**
     * Concurrence handling: wait for operations being made on the schema
     * @abstract
     * @throws {SchemaConcurrencyError}
     * @return {Promise<void>}
     */
    waitForFree() {
        /* empty */
    }

    /**
     * Name of the provided schema
     * @abstract
     * @return {string}
     */
    getSchema() {
        /* empty */
    }

    /**
     * Retrieve the name(s) of the table of the received data type
     * Multiple names can be returned to account for inheritance
     * @abstract
     * @param {!Tag} dataType
     * @param {boolean=} includeInheritance
     * @return {string[]}
     */
    getTablesOfType(dataType, includeInheritance = true) {
        /* empty */
    }

    /**
     * Retrieve all columns for the table names provided
     * @abstract
     * @param {...string} tableNames
     * @return {Generator<[string, string]>}
     */
    getAllColumns(...tableNames) {
        /* empty */
    }

    /**
     * Retrieve data type tag for given table name
     * @abstract
     * @param {string} table
     * @return {?string}
     */
    getTableTag(table) {
        /* empty */
    }
    /**
     * Given a relation, find all the table names(fromName, relationName, toName) tuples,
     * such that `fromName` is in `fromTables` and extends the origin model of the relation
     * @abstract
     * @param {string[]} fromTables
     * @param {!Relation} relation
     * @return {[string, string, string][]}
     */
    getRelationTables(fromTables, relation) {
        /* empty */
    }
    /**
     * Verify data type has a corresponding table
     * Verify corresponding table has columns for all properties of the data type
     * @abstract
     * @param {string} dataType
     * @param {string[]} properties
     */
    ensureDataType(dataType, properties) {
        /* empty */
    }
    /**
     * Verify relation has a corresponding table
     * Return table information
     * @abstract
     * @param {string} relationTag
     * @param {string} fromTag
     * @param {string} toTag
     */
    ensureRelation(relationTag, fromTag, toTag) {
        /* empty */
    }

    /**
     * @abstract
     * @param {string} dataType
     * @return {string}
     */
    getTableName(dataType) {
        /* empty */
    }

    /**
     * Get column qualified name for a property of data type
     * @abstract
     * @param {string} table
     * @param {string} property
     * @return {string}
     */
    getColumn(table, property) {
        /* empty */
    }

    /**
     * Get table name for given relation tag, `from` data type tag and `to` data type tag
     * @abstract
     * @param {string} relationTag
     * @param {string} fromTag
     * @param {string} toTag
     */
    getRelationTableName(relationTag, fromTag, toTag){
        /* empty */
    }

    /**
     * Get the dialect name used for the data source
     * E.g., mssql, pg, mysql, ...
     */
    getDBDialectName() {
        /* empty */
    }

    /**
     * @param {string} name
     * @param {string} tag
     * @param max
     * @return {string} translate a tag the olympe standard name for the corresponding database entity.
     */
    static tagTranslationToODBName(name, tag, max = MAX_NAME_LENGTH){
        const tagLength = Math.min(10, tag.length);
        // Ensure the name do not start by a digit and does not contain non-word characters.
        const candidate = name.replace(/^\d|\W/g, '_').substring(0, max - 1 - tagLength);
        return tagLength > 0 ? candidate.concat('_', tag.slice(-tagLength)) : candidate;
    }
    /**
     * @param {string} from
     * @param {string} rel
     * @param {string} to
     * @param {string} relGlobalTag
     * @param {number=} max
     * @return {string} translate a relation the olympe standard name for the corresponding database entity.
     */
     static relationTranslationToODBName(from, rel, to, relGlobalTag, max = MAX_NAME_LENGTH) {
        const hash = jenkinsOneAtATimeHash(relGlobalTag);
        const hashLength = Math.min(10, hash.length);
        const subMax = Math.floor((max - hashLength - 3) / 3);
        return `${SchemaProvider.tagTranslationToODBName(from, '', subMax)}_${SchemaProvider.tagTranslationToODBName(rel, '', subMax)}_${SchemaProvider.tagTranslationToODBName(to, '', subMax)}_${hash.slice(-hashLength)}`;
    }

    /**
     * @param {string} fromTag
     * @param {string} toTag
     * @param {string} relationTag
     * @returns {string}
     */
    static getRelGlobalTag(fromTag, toTag, relationTag) {
        return `${fromTag}:${relationTag}:${toTag}`;
    }
}
