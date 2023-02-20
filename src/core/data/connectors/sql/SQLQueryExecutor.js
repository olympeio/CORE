import {Direction, QueryPart, DataResult} from 'olympe';
import {Knex} from "knex";

export const COLUMNS = {
    TAG: 'tagOlympe',
    FROM: 'tagOlympeOrig',
    TO: 'tagOlympeDest',
    FILE_CONTENT: 'fileContent'
};

const OPERANDS = {
    EQUALS: '=',
    LIKE: 'LIKE',
    SMALLER_EQUALS: '<=',
    GREATER_EQUALS: '>=',
    SMALLER: '<',
    GREATER: '>',
};

const WHERE_OPERANDS = {
    AND: '&',
    OR: '|',
    NOT: '!',
    NONE: '',
};

const PREFIXES = {
    TAG: 't_',
    TABLE: 'tt_',
    COLUMN: 'c_',
    MODEL: 'm_',
};

export default class SQLQueryExecutor {

    /**
     * @param {!Knex} client
     * @param {!SchemaObserver} schemaObserver
     * @param {!log.Logger} logger
     */
    constructor(client, schemaObserver, logger) {
        /**
         * @private
         * @type {!Knex}
         */
        this.client = client;

        /**
         * @private
         * @type {!SchemaObserver}
         */
        this.schema = schemaObserver;

        /**
         * @private
         * @type {!log.Logger}
         */
        this.logger = logger;

        /**
         * @private
         * @type {!Map<string, string>}
         */
        this.aliases = new Map();

        /**
         * @private
         * @type {!Map<string, number>}
         */
        this.aliasIndexes = new Map();

        /**
         * @private
         * @type {!Map<string, string>}
         */
        this.reverseAliases = new Map();
    }

    /**
     * Transform a query to a knex query builder, ready to be executed.
     *
     * @param {!Query} query
     * @return {!Promise<!DataResult>}
     */
    executeQuery(query) {
        const result = DataResult.fromQuery(query);
        const rootPart = query.parse();
        const {limit, offset, root, dataType, next, returned} = rootPart;

        const initTables = this.schema.getInheritedTables(dataType);
        if (initTables.length === 0) {
            return Promise.resolve(result);
        }

        const rootColumns = new Set(returned ? initTables.flatMap((table) => this.schema.getAllColumns(table)) : []).add(COLUMNS.TAG);
        const filter = root ? [[[COLUMNS.TAG, OPERANDS.EQUALS, root]]] : []; // Filter with the root tag if defined.
        const rootLevel = { columns: rootColumns, filter, optional: false, tables: initTables };
        const parsedRelationParts = next.map((part) => this.parsePart(part, initTables));
        const parsedParts = [rootLevel, ...parsedRelationParts];

        // `Paths` is made of list of tables to join.
        // E.g: if we have the following parts [t01, t02], [t11] and [t21, t22] it will build:
        // [[t01, r1, t11, r2 t21], [t02, r1, t11, r2, t21], [t01, r1, t11, r2, t22], [t02, r1, t11, r2, t22]]
        const paths = parsedRelationParts.reduce((paths, part) => {
            return paths.flatMap((path) => part.tables.map(([from, rel, to]) => from === path[path.length-1] && path.concat(rel, to)));
        }, initTables.map((table) => [table]));

        if (paths.length !== parsedParts.length * 2 - 1) {
            throw new Error('Query was not built properly');
        }

        const queryBuilders = [];
        for (const path of paths) {
            const rootTable = path[0];
            // Initiate a new knex query builder
            const builder = this.builder()
                .select(this.selectColumns(0, rootTable, rootColumns))
                .from(this.fromTable(0, rootTable));

            // Loop over each couple (relation, destination) of the path
            for (let i = 1, l = path.length; i < l; i += 2) {
                const index = ((i - 1) / 2) + 1;
                const fromTable = this.fromTable(index, path[i - 1]);
                const relTable = this.fromTable(index, path[i]);
                const toTable = this.fromTable(index, path[i + 1]);
                const {optional, columns, relation} = parsedParts[index];

                // Select the required column for the next level
                builder.select(this.selectColumns(index, toTable, columns));

                const direction = relation.getDirection();
                const joinCol1 = direction === Direction.DESTINATION ? COLUMNS.FROM : COLUMNS.TO;
                const joinCol2 = direction === Direction.DESTINATION ? COLUMNS.TO : COLUMNS.FROM;

                // Then apply the join for relation.
                builder[optional ? 'leftJoin' : 'innerJoin'](fromTable, (qb) => {
                    qb.on(`${fromTable}.${COLUMNS.TAG}`, `${relTable}.${joinCol1}`);
                });
                builder.innerJoin(relTable, (qb) => {
                    qb.on(`${relTable}.${joinCol2}`, `${toTable}.${COLUMNS.TAG}`);
                });
            }

            queryBuilders.push(builder);
        }

        // Apply the Union of all the accumulated builders
        const queryBuilder = queryBuilders.shift().union(queryBuilders)

        // Apply the sort - limit - offset operator on the global builder.
        // TODO: sort
        limit > -1 && queryBuilder.limit(limit);
        offset > 0 && queryBuilder.offset(offset);

        this.logger.debug(`SQL Query to be executed: ${queryBuilder.toSQL().sql}`);

        return queryBuilder.then((rows) => {
            const result = DataResult.fromQuery(query);
            this.logger.info(`Result size: ${rows.length}`);
            this.buildDataResult(result, rows, parsedRelationParts.map((part) => part.relation));
            return result;
        });
    }

    /**
     * @private
     * @param {!QueryPart} part
     * @param {string[]} parentTables
     * @return {Array<!Object>}
     */
    parsePart(part, parentTables) {
        const {relation, optional, filter, returned, next} = part;
        const relationTables = this.schema.getRelationTables(parentTables, relation);
        if (relationTables.length === 0) {
            return [];
        }
        const toTables = relationTables.map((t) => t[2]);
        const columns = new Set(returned ? toTables.flatMap((table) => this.schema.getAllColumns(table)) : []).add(COLUMNS.TAG);
        const currentLevel = { columns, filter, optional, tables: relationTables };
        return [currentLevel, ...next.map((part) => this.parsePart(part, toTables))];
    }

    /**
     * @private
     * @return {!Knex.QueryBuilder}
     */
    builder() {
        return this.client.queryBuilder().withSchema(this.schema.getSchema());
    }

    /**
     * @private
     * @param part
     */
    parseFilter(part) {
        // TODO
    }

    /**
     * @private
     * @param {number} index
     * @param {!Table} table
     * @param {string | !Knex.Raw} tableAlias
     * @param {!Set<string>} columns
     * @return {!Knex.Raw[]}
     */
    selectColumns(index, table, tableAlias, columns) {
        const existingColumns = new Set(table.getColumns());
        const modelTag = table.getTag();
        return Array.from(columns).map((c) => {
            return existingColumns.has(c)
                ? this.client.raw('??.?? as ??', [this.getTableAlias(index, tableAlias), c, this.getColumnAlias(index, tableAlias, c)])
                : this.client.raw('null as ??', [this.getColumnAlias(index, tableAlias, c)]);
        }).concat(this.client.raw(`'${modelTag}' as ??`, [this.getModelAlias(index, modelTag)]));
    }

    /**
     * @private
     * @param {number} index
     * @param {string} table
     * @return {!Knex.Raw}
     */
    fromTable(index, table) {
        return this.client.raw('??.?? as ??', [this.schema.getSchema(), table, this.getTableAlias(index, table)]);
    }

    /**
     * @private
     * @param {number} index
     * @param {string} name
     * @return {string}
     */
    getTableAlias(index, name) {
        return this.getAlias(`${index};${name}`, 't_');
    }

    /**
     * @private
     * @param {number} index
     * @param {string} tableName
     * @param {string} name
     * @return {string}
     */
    getColumnAlias(index, tableName, name) {
        return this.getAlias(`${index};${tableName};${name}`, 'c_');
    }

    getModelAlias(index, modelTag) {
        return this.getAlias()
    }

    /**
     * @private
     * @param {!DataResult} result
     * @param {!Object} rows
     * @param {string[]} relations
     */
    buildDataResult(result, rows, relations) {
        const currentRowInstances = []; // index to instance

        for (const row of rows) {
            for (const [alias, value] of Object.entries(row)) {
                const index = this.aliasIndexes.get(alias);
                const instance = currentRowInstances[index] ?? {};
                currentRowInstances[index] ??= instance;
                if (alias.startsWith(PREFIXES.TAG)) {
                    instance.tag = value;
                } else if (alias.startsWith(PREFIXES.MODEL)) {
                    instance.model = value;
                } else {
                    const props = instance.properties ?? new Map();
                    props.set(this.reverseAliases.get(alias), value);
                    instance.properties ??= props;
                }
            }

            currentRowInstances.forEach((instance, index) => {
                result.create(instance.tag, instance.model, instance.properties);
                if (index > 0 && relations.length >= index) {
                    result.createRelation(relations[index - 1], currentRowInstances[index - 1].tag, instance.tag);
                }
            });

            currentRowInstances.length = 0; // Clean the current row buffer.
        }
    }

    /**
     * @private
     * @param {number} index
     * @param {string} prefix
     * @param {string} tag
     * @return {string}
     */
    getAlias(index, prefix, tag) {
        const value = index + tag;
        let alias = this.aliases.get(value);
        if (typeof alias !== 'string') {
            alias = prefix + this.aliases.size;
            this.reverseAliases.set(alias, tag);
            this.aliasIndexes.set(alias, index);
            this.aliases.set(value, alias);
        }
        return alias;
    }
}
