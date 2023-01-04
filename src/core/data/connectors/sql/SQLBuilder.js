import {DBView, Direction} from 'olympe';
import {Knex} from "knex";

export const columns = {
    TAG: 'tagOlympe',
    FROM: 'tagOlympeOrig',
    TO: 'tagOlympeDest',
    FILE_CONTENT: 'fileContent'
};

const operands = {
    EQUALS: '=',
    LIKE: 'LIKE',
    SMALLER_EQUALS: '<=',
    GREATER_EQUALS: '>=',
    SMALLER: '<',
    GREATER: '>',
};

const whereOperands = {
    AND: '&',
    OR: '|',
    NOT: '!',
    NONE: '',
};

export default class SQLBuilder {

    /**
     * @param {!Knex} client
     * @param {!SchemaObserver} schemaObserver
     * @param {boolean} useNames
     */
    constructor(client, schemaObserver, useNames) {
        /**
         * @private
         * @type {!Knex.QueryBuilder}
         */
        this.builder = client.queryBuilder().withSchema(schemaObserver.getSchema());

        /**
         * @private
         * @type {!SchemaObserver}
         */
        this.schema = schemaObserver;

        /**
         * @private
         * @type {boolean}
         */
        this.useNames = useNames;

        /**
         * @private
         * @type {!Map<string, string>}
         */
        this.aliases = new Map();
    }

    /**
     * Transform a query to a knex query builder, ready to be executed.
     *
     * @param {!Query} query
     * @return {Knex.QueryBuilder}
     */
    parseQuery(query) {
        const rootPart = query.parse();
        const {limit, offset, root, dataType, next, returned} = rootPart;

        // Setup limit - offset
        limit > -1 && this.builder.limit(limit);
        offset > 0 && this.builder.offset(offset);

        const rootTables = this.schema.getInheritedTables(dataType);
        if (rootTables.length === 0) {
            return null;
        }

        this.builder.select(this.selectColumnsFromTables(rootTables, returned));

        const rootTableAliases = rootTables
            .map((table) => this.raw('?? as ??', [table, this.getTableAlias(table)]))
            .join(',');

        this.builder.from(rootTableAliases);
        if (typeof root === 'string') {
            this.builder.where(columns.TAG, operands.EQUALS, root);
        }

        // Parse the next parts of the query, recursively.
        for (const part of next) {
            this.parsePart(part, rootTables);
        }

        return this.builder;
    }

    /**
     * Prevent SQL injection.
     *
     * @private
     * @param {string} template
     * @param {!Array<string>=} bindings
     */
    raw(template, bindings) {
        return this.builder.client.raw(template, bindings);
    }

    /**
     * @private
     * @param {!QueryPart} part
     * @param {string[]} previousTables
     */
    parsePart(part, previousTables) {
        const {relation, optional, returned, next} = part;

        const relationTables = this.schema.getRelationTables(previousTables, relation);

        // Early return if there is no table to follow the relation of this part.
        if (relationTables.length === 0) {
            return;
        }

        const destTables = relationTables.map((tuple) => tuple[2]);
        this.builder.select(this.selectColumnsFromTables(destTables, returned));

        const direction = relation.getDirection();
        const joinCol1 = direction === Direction.DESTINATION ? columns.FROM : columns.TO;
        const joinCol2 = direction === Direction.DESTINATION ? columns.TO : columns.FROM;
        relationTables.forEach(([from, rel, to]) => {
            this.builder[optional ? 'leftJoin' : 'innerJoin'](this.fromTable(from), (qb) => {
                qb.on(`${this.getTableAlias(from)}.${columns.TAG}`, `${this.getTableAlias(rel)}.${joinCol1}`);
            });
            this.builder.innerJoin(this.fromTable(rel), (qb) => {
                qb.on(`${this.getTableAlias(rel)}.${joinCol2}`, `${this.getTableAlias(to)}.${columns.TAG}`);
            });
        });
        // Parse the next parts of the query.
        for (const part of next) {
            this.parsePart(part, destTables);
        }
    }

    parseFilter(part) {

    }

    /**
     * @private
     * @param {string[]} tables
     * @param {boolean} withProperties
     * @return {string}
     */
    selectColumnsFromTables(tables, withProperties) {
        return tables.flatMap((table) => {
            const tableAlias = this.getTableAlias(table);
            if (withProperties) {
                return this.schema.getAllColumns(table).map((col) => {
                    return this.raw('??.?? as ??', [tableAlias, col, this.getColumnAlias(table, col)]);
                });
            }
            return this.raw('??.?? as ??', [tableAlias, columns.TAG, this.getColumnAlias(table, columns.TAG)]);

        }).join(',');
    }

    /**
     * @private
     * @param {string} table
     * @return {string}
     */
    fromTable(table) {
        return `${table} as ${this.getTableAlias(table)}`;
    }

    /**
     * @private
     * @param {string} tag
     * @return {string}
     */
    getSQLName(tag) {
        return this.useNames ? DBView.get().name(tag) : tag;
    }

    /**
     * @private
     * @param {string} name
     * @return {string}
     */
    getTableAlias(name) {
        return this.getAlias(name, 't_');
    }

    /**
     * @private
     * @param {string} tableName
     * @param {string} name
     * @return {string}
     */
    getColumnAlias(tableName, name) {
        return this.getAlias(`${tableName};${name}`, 'c_');
    }

    /**
     * @private
     * @param {string} name
     * @param {string} prefix
     * @return {string}
     */
    getAlias(name, prefix) {
        const sqlName = this.getSQLName(name);
        let alias = this.aliases.get(sqlName);
        if (typeof alias !== 'string') {
            alias = prefix + this.aliases.size;
            this.aliases.set(sqlName, alias);
        }
        return alias;
    }
}
