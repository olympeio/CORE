import {
    Direction,
    QueryPart,
    DataResult,
    Query,
    Order,
    tagToString,
    Color,
    QuerySingle,
    PropertyModel,
    ColorModel
} from 'olympe';
import {Knex} from "knex";
import {parsePredicate} from './SQLPredicateBuilder';

export const COLUMNS = {
    TAG: 'tagOlympe',
    FROM: 'tagOlympeOrig',
    TO: 'tagOlympeDest',
    FILE_CONTENT: 'fileContent'
};

const PREFIXES = {
    TAG: 't_',
    TABLE: 'tt_',
    COLUMN: 'c_',
    MODEL: 'm_',
};

export default class SQLQueryExecutor {

    /**
     * @param {!log.Logger} logger
     * @param {!Knex} client
     * @param {!SchemaObserver} schemaObserver
     */
    constructor(logger, client, schemaObserver) {

        /**
         * @private
         * @type {!log.Logger}
         */
        this.logger = logger;

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
     * @param {!Query<CloudObject, any>} query
     * @return {Promise<!DataResult>}
     */
    async executeQuery(query) {
        // Wait for the schema observer to be ready before building a query.
        await this.schema.waitForFree();

        const result = DataResult.fromQuery(query);
        const rootPart = query.parse();
        const {limit, offset, root, dataType, inheritance, next, returned, filter, sort} = rootPart;

        const initTables = this.schema.getTablesOfType(/** @type {!Tag} */ (dataType), inheritance);
        if (initTables.length === 0) {
            return Promise.resolve(result);
        }

        // Parse parts of the query to transform them into a single array, to build SQL query with joins.
        const rootColumns = new Map(returned ? this.schema.getAllColumns(...initTables) : [[COLUMNS.TAG, COLUMNS.TAG]]);
        const finalFilter = root ? [[{name: 'IS', tags: [root]}]] : filter; // Filter with the root tag if defined.
        const rootLevel = { columns: rootColumns, filter: finalFilter, sort, optional: false, tables: initTables, index: 0 };
        const parsedParts = next.reduce((acc, part) => {
            acc.push(...this.parsePart(part, initTables, acc.length, 0));
            return acc;
        }, [rootLevel]);
        const parsedRelationParts = parsedParts.slice(1);

        // `Paths` is made of list of tables to join. To handle inheritance, it could generate multiple joins to union.
        // E.g: if we have the following tables in parts [t01, t02], [t11] and [t21, t22] it will build:
        // [
        //      [[t01], [t01, r1, t11], [t11, r2, t21]], => path 1
        //      [[t02], [t02, r1, t11], [t11, r2, t21]], => path 2
        //      [[t01], [t01, r1, t11], [t11, r2, t22]], => path 3
        //      [[t02], [t02, r1, t11], [t11, r2, t22]]  => path 4
        // ]
        let paths = initTables.map((table) => [[table]]);
        for (const {parentIndex, tables} of parsedRelationParts) {
            paths = tables.flatMap((relTable) => {
                return paths.map((path) => {
                    if (path[parentIndex][0] === relTable[0]) { // Ensure concordance of path (toTable of parent == fromTable of current level)
                        return [...path, relTable];
                    }
                    throw new Error(`Path does not match: ${path[parentIndex][0]} !== ${relTable[0]}`);
                });
            });
        }

        const queryBuilders = [];
        for (const path of paths) {
            const [rootTable] = path[0];
            // Initiate a new knex query builder for each path
            const builder = this.builder()
                .select(this.selectColumns(0, rootTable, rootColumns))
                .from(this.fromTable(0, rootTable));

            const rootFilter = parsedParts[0].filter;
            rootFilter && this.buildPredicate(builder, 0, rootTable, rootFilter);
            // Loop over each tuple (origin, relation, destination) of the path
            for (let i = 1, l = path.length; i < l; i++) {
                const [fromTable, relTable, toTable] = path[i];
                const {optional, columns, filter, relation, parentIndex} = parsedParts[i];

                // Select the required column for the next level
                builder.select(this.selectColumns(i, toTable, columns));

                // Apply potential filters
                filter && this.buildPredicate(builder, i, toTable, filter);

                // Then apply the join for relation.
                const direction = relation.getDirection();
                const joinCol1 = direction === Direction.DESTINATION ? COLUMNS.FROM : COLUMNS.TO;
                const joinCol2 = direction === Direction.DESTINATION ? COLUMNS.TO : COLUMNS.FROM;
                builder[optional ? 'leftJoin' : 'innerJoin'](this.fromTable(i, relTable), (qb) => {
                    qb.on(this.fromColumn(i, relTable, joinCol1), this.fromColumn(parentIndex, fromTable, COLUMNS.TAG));
                });
                builder.innerJoin(this.fromTable(i, toTable), (qb) => {
                    qb.on(this.fromColumn(i, toTable, COLUMNS.TAG), this.fromColumn(i, relTable, joinCol2));
                });
            }

            queryBuilders.push(builder);
        }

        // Apply the Union of all the accumulated builders
        const queryBuilder = queryBuilders.shift().union(queryBuilders)

        // Apply the sort - limit - offset operator on the global builder.
        const sortPart = parsedParts.reverse().find((part) => !!part.sort);
        if (sortPart) {
            const {index, sort, columns} = sortPart;
            const sortPropTag = tagToString(sort.property);
            if (columns.has(sortPropTag)) { // Do not sort if the column does not exist (eg: no instance has initiated that property).
                queryBuilder.orderBy(this.getColumnAlias(index, sortPropTag), sort.order === Order.ASC ? 'ASC' : 'DESC');
            }
        }
        limit > -1 && queryBuilder.limit(limit);
        offset > 0 && queryBuilder.offset(offset);

        // Execute the SQL Query on the database
        this.logger.debug(`SQL Query to be executed: ${queryBuilder.toString()}`);
        const rows = await queryBuilder;

        // Build and return DataResult from SQL raw result
        const dataResult = DataResult.fromQuery(query);
        this.logger.debug(`Result size: ${rows.length}`);
        this.buildDataResult(dataResult, rows, parsedRelationParts);
        return dataResult;
    }

    /**
     * Return the binary content of the given file.
     *
     * @param {string} fileTag
     * @param {string} dataType
     * @return {Promise<!Uint8Array>}
     */
    async downloadFileContent(fileTag, dataType) {
        const {FILE_CONTENT, TAG} = COLUMNS;
        const tableName = this.schema.getTablesOfType(dataType, false)[0];
        if (tableName) {
            const rows = await this.builder().from(tableName).select(FILE_CONTENT).where(TAG, fileTag);
            const fileResult = rows[0];
            if (fileResult?.[FILE_CONTENT]) {
                const fileBuffer = fileResult[FILE_CONTENT];
                return fileBuffer.buffer.slice(fileBuffer.byteOffset, fileBuffer.byteOffset + fileBuffer.byteLength);
            }
        }
        throw new Error(`File ${fileTag} not found in the database`);
    }

    /**
     * @private
     * @param {!QueryPart} part
     * @param {string[]} parentTables
     * @param {number} partIndex
     * @param {number} parentIndex
     * @return {!Array<!Object>}
     */
    parsePart(part, parentTables, partIndex, parentIndex) {
        const {relation, optional, filter, sort, returned, next} = part;
        const relationTables = this.schema.getRelationTables(parentTables, relation);
        if (relationTables.length === 0) {
            return [];
        }
        const toTables = relationTables.map((t) => t[2]);
        const columns = new Map(returned ? this.schema.getAllColumns(...toTables) : [[COLUMNS.TAG, COLUMNS.TAG]]);
        const currentLevel = { columns, filter, sort, optional, relation, tables: relationTables, index: partIndex, parentIndex };

        return next.reduce((acc, part) => {
            acc.push(...this.parsePart(part, toTables, partIndex + acc.length, partIndex));
            return acc;
        }, [currentLevel]);
    }

    /**
     * @private
     * @param {Knex.QueryBuilder} builder
     * @param {number} index
     * @param {string} table
     * @param {!Array<!Array<Object>>} predicates
     */
    buildPredicate(builder, index, table, predicates)  {
        if (predicates.length === 0) {
            return;
        }
        builder.whereWrapped((wrappedBuilder) => {
            for (const orClausePredicates of predicates) {
                wrappedBuilder.orWhere((orClauseWrapper) => {
                    for (const objectPredicate of orClausePredicates) {
                        const sqlColumnName = this.schema.getColumn(table, objectPredicate.property ?? COLUMNS.TAG);
                        if (sqlColumnName !== null) {
                            orClauseWrapper.andWhere((andClauseWrapper) => {
                                const column = this.client.raw('??.??', [this.getTableAlias(index, table), sqlColumnName]);
                                parsePredicate(andClauseWrapper, column, objectPredicate);
                            });
                        }
                    }
                });
            }
        });
    };

    /**
     * @private
     * @return {!Knex.QueryBuilder}
     */
    builder() {
        return this.client.queryBuilder().withSchema(this.schema.getSchema());
    }

    /**
     * @private
     * @param {number} index
     * @param {string} table
     * @param {!Map<string, string>} columns
     * @return {!Knex.Raw[]}
     */
    selectColumns(index, table, columns) {
        const existingColumns = new Map(this.schema.getAllColumns(table));
        const modelTag = this.schema.getTableTag(table);
        return Array.from(columns).map(([propTag, column]) => {
            return existingColumns.has(propTag)
                ? this.client.raw('??.?? as ??', [this.getTableAlias(index, table), column, this.getColumnAlias(index, propTag)])
                : this.client.raw('null as ??', [this.getColumnAlias(index, propTag)]);
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
     * @param {string} table
     * @param {string} column
     * @return {!Knex.Raw}
     */
    fromColumn(index, table, column) {
        return this.client.raw('??.??', [this.getTableAlias(index, table), column]);
    }

    /**
     * @private
     * @param {number} index
     * @param {string} name
     * @return {string}
     */
    getTableAlias(index, name) {
        return this.getAlias(index, PREFIXES.TABLE, name);
    }

    /**
     * @private
     * @param {number} index
     * @param {string} name
     * @return {string}
     */
    getColumnAlias(index, name) {
        return this.getAlias(index, name === COLUMNS.TAG ? PREFIXES.TAG : PREFIXES.COLUMN, name);
    }

    /**
     * @private
     * @param {number} index
     * @param {string} modelTag
     * @return {string}
     */
    getModelAlias(index, modelTag) {
        return this.getAlias(index, PREFIXES.MODEL, modelTag)
    }

    /**
     * @private
     * @param {!DataResult} result
     * @param {!Object} rows
     * @param {!Object[]} relationParts
     */
    buildDataResult(result, rows, relationParts) {
        // Specific behaviour for Color type:
        const colorProperties = new Set();
        const colorModelTag = tagToString(ColorModel);
        for (const [alias, value] of this.reverseAliases) {
            if (alias.startsWith(PREFIXES.COLUMN)) {
                const type = QuerySingle.from(value).follow(PropertyModel.typeRel).executeFromCache();
                type?.getTag() === colorModelTag && colorProperties.add(value);
            }
        }

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
                    const propTag = this.reverseAliases.get(alias);
                    if (typeof propTag === 'string') {
                        const props = instance.properties ?? new Map();
                        const propVal = colorProperties.has(propTag) && typeof value === 'string'
                            ? Color.create(...value.split(';'))
                            : value;
                        props.set(propTag, propVal);
                        instance.properties ??= props;
                    }
                }
            }

            currentRowInstances.forEach((instance, index) => {
                if (!instance.tag || !instance.model) {
                    this.logger.warn('An instance is missing its tag or model => ignore that instance');
                    return;
                }

                result.create(instance.tag, instance.model, instance.properties);
                if (index > 0 && relationParts.length >= index) {
                    const {relation, parentIndex} = relationParts[index - 1];
                    const otherTag = currentRowInstances[parentIndex].tag;
                    if (!otherTag) {
                        this.logger.warn('An instance is missing its tag => ignore the relation to create with', instance.tag);
                        return;
                    }
                    relation.getDirection() === Direction.ORIGIN
                        ? result.createRelation(relation.getTag(), instance.tag, otherTag)
                        : result.createRelation(relation.getTag(), otherTag, instance.tag);
                }
            });

            currentRowInstances.length = 0; // Clean the current row buffer.
        }
    }

    /**
     * @private
     * @param {number} index
     * @param {string} prefix
     * @param {string} name
     * @return {string}
     */
    getAlias(index, prefix, name) {
        const value = index + name;
        let alias = this.aliases.get(value);
        if (typeof alias !== 'string') {
            alias = prefix + this.aliases.size;
            this.reverseAliases.set(alias, name);
            this.aliasIndexes.set(alias, index);
            this.aliases.set(value, alias);
        }
        return alias;
    }
}
