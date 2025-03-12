import {
    Direction,
    QueryPart,
    DataResult,
    Query,
    Order,
    tagToString,
    CloudObject,
    Color,
    QuerySingle,
    PropertyModel,
    ColorModel,
    DatetimeModel, NumberModel, BooleanModel
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
     * @param {!SchemaProvider} schemaProvider
     */
    constructor(logger, client, schemaProvider) {

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
         * @type {!SchemaProvider}
         */
        this.schema = schemaProvider;

        /**
         * @private
         * @type {!Map<string, string>}
         */
        this.propertyTypes = new Map();

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

        /**
         * Used to bypass the execution of SQL queries on the database directly to use another transport layer (eg: HTTP)
         *
         * @private
         * @type {function(!Knex.QueryBuilder):!Promise<*>}
         */
        this.executor = (builder) => builder.then();
    }

    /**
     * Set a function that will handle the execution of the SQL query once built, instead of being applied directly on a local database.
     *
     * @param {function(!Knex.QueryBuilder):!Promise<*>} executor
     * @return {this}
     */
    delegateExecution(executor) {
        this.executor = executor;
        return this;
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
        const rootColumns = this.getRequiredColumns(rootPart, initTables);
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
            paths = paths.flatMap((path) => {
                const previousLevel = path[parentIndex].at(-1);
                const validTables = tables.filter((relTable) => relTable.at(0) === previousLevel);
                return validTables.length > 0
                    // If at least 1 table exist for that relation, with the previous data type, add them to the path
                    // generate multiple new paths if more than 1 table is "valid".
                    ? validTables.map((relTable) => [...path, relTable])
                    // Otherwise, fulfil the path with null section => all paths must have the same length to apply unions.
                    : [[...path, [previousLevel, null, null]]];
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

                // If relTable is null, only keep select and do not do join
                if (relTable === null) {
                    continue;
                }

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
        const rows = /** @type {!Array<!Object>} */ (await this.executor(queryBuilder));

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
        const tableName = this.schema.getTablesOfType(dataType, false)?.[0];
        if (tableName) {
            const rows = await this.executor(this.builder().from(tableName).select(FILE_CONTENT).where(TAG, fileTag));
            const fileContent = rows[0]?.[FILE_CONTENT];
            if (fileContent instanceof Uint8Array) {
                return fileContent;
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
        // Ensure we do not have duplicates (eg: can happen with inheritance, with relations defined on ancestor)
        const toTables = Array.from(new Set(relationTables.map((t) => t[2])));
        const columns = this.getRequiredColumns(part, toTables);
        const currentLevel = { columns, filter, sort, optional, relation, tables: relationTables, index: partIndex, parentIndex };

        return next.reduce((acc, part) => {
            acc.push(...this.parsePart(part, toTables, partIndex + acc.length, partIndex));
            return acc;
        }, [currentLevel]);
    }

    /**
     * Return the list of properties / columns to select from the database based for the given query part.
     *
     * @private
     * @param {!QueryPart} part
     * @param {!string[]} destinationTables
     * @return {!Map<string, string>}
     */
    getRequiredColumns(part, destinationTables) {
        // In case the current part is part of the "returned" part, we return all the available columns
        if (part.returned) {
            return new Map(this.schema.getAllColumns(...destinationTables));
        }

        // Otherwise, extract the tag, and potential required properties to apply filters and/or sort.
        const {filter, sort} = part;
        const properties = new Set([COLUMNS.TAG, sort?.property?.getTag()]
            .concat(filter.flatMap((andPredicates) => andPredicates.map((predicate) => predicate?.property)))
            .filter((prop) => !!prop));

        return Array.from(properties).reduce((map, prop) => {
            destinationTables.some((table) => {
                const column = this.schema.getColumn(table, prop);
                return Boolean(column && map.set(prop, column));
            });
            return map;
        }, new Map());
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
                        const property = objectPredicate.property // Simple case: predicate on a property
                            ?? objectPredicate.predicate?.property       // NOT predicate: nested property
                            ?? COLUMNS.TAG;                              // Tag predicate
                        const sqlColumnName = this.schema.getColumn(table, property);
                        if (sqlColumnName !== null) {
                            orClauseWrapper.andWhere((andClauseWrapper) => {
                                const column = this.client.raw('??.??', [this.getTableAlias(index, table), sqlColumnName]);
                                parsePredicate(andClauseWrapper, column, objectPredicate, this.schema.getDBDialectName());
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
     * @param {?string} table
     * @param {!Map<string, string>} columns
     * @return {!Knex.Raw[]}
     */
    selectColumns(index, table, columns) {
        if (table === null) {
            // Return all the columns as null
            return Array.from(columns.keys()).map((propTag) => {
                return this.client.raw(`${this.castNull(propTag)} as ??`, [this.getColumnAlias(index, propTag)]);
            }).concat(this.client.raw(`null as ??`, [this.getModelAlias(index, null)]));
        }

        const existingColumns = new Map(this.schema.getAllColumns(table));
        const modelTag = this.schema.getTableTag(table);
        return Array.from(columns).map(([propTag, column]) => {
            return existingColumns.has(propTag)
                ? this.client.raw('??.?? as ??', [this.getTableAlias(index, table), column, this.getColumnAlias(index, propTag)])
                : this.client.raw(`${this.castNull(propTag)} as ??`, [this.getColumnAlias(index, propTag)]);
        }).concat(this.client.raw(`'${modelTag}' as ??`, [this.getModelAlias(index, modelTag)]));
    }

    /**
     * @private
     * @param {string} propertyOrTag
     * @return {string}
     */
    castNull(propertyOrTag) {
        if (propertyOrTag === COLUMNS.TAG) {
            return 'NULL';
        }
        switch (this.getPropertyType(propertyOrTag)) {
            case tagToString(NumberModel):
                return 'CAST(NULL AS FLOAT)';
            case tagToString(BooleanModel):
                return 'CAST(NULL AS BOOL)';
            case tagToString(DatetimeModel):
                return 'CAST(NULL AS TIMESTAMP)';
            default:
                return 'NULL';
        }
    }

    /**
     * @private
     * @param {string} property
     * @return {string}
     */
    getPropertyType(property) {
        let type = this.propertyTypes.get(property);
        if (!type) {
            type = QuerySingle.from(property).follow(PropertyModel.typeRel).executeFromCache()?.getTag();
            this.propertyTypes.set(property, type);
        }
        return type;
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
     * @param {?string} modelTag
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
        const datetimeProperties = new Set();
        const booleanProperties = new Set();
        const colorModelTag = tagToString(ColorModel);
        const datetimeModelTag = tagToString(DatetimeModel);
        const booleanModelTag = tagToString(BooleanModel);
        for (const [alias, value] of this.reverseAliases) {
            if (alias.startsWith(PREFIXES.COLUMN)) {
                // Extract DateTime and Color properties to cast primitive values coming from SQL to Date or Color objects
                const typeTag = this.getPropertyType(value);
                switch (typeTag) {
                    case colorModelTag: colorProperties.add(value); break;
                    case datetimeModelTag: datetimeProperties.add(value); break;
                    case booleanModelTag: booleanProperties.add(value); break;
                    default:
                }
            }
        }

        const currentRowInstances = []; // index to instance
        for (const row of rows) {
            for (const [alias, value] of Object.entries(row)) {
                const index = this.aliasIndexes.get(alias);
                const instance = currentRowInstances[index] ?? {};
                currentRowInstances[index] ??= instance;
                // Current column contains the tag of an instance
                if (alias.startsWith(PREFIXES.TAG)) {
                    instance.tag = value;
                }
                // Current column contains the model tag of an instance
                else if (alias.startsWith(PREFIXES.MODEL)) {
                    instance.model = value;
                }
                // Current column contains the value of a property for an instance
                else {
                    const propTag = this.reverseAliases.get(alias);
                    if (typeof propTag === 'string') {
                        const props = instance.properties ?? new Map();
                        let propVal;
                        if (colorProperties.has(propTag) && typeof value === 'string') {
                            propVal = Color.create(...value.split(';'));
                        } else if (datetimeProperties.has(propTag) && typeof value === 'string') {
                            propVal = new Date(value);
                        } else if (booleanProperties.has(propTag)) {
                            propVal = Boolean(value);
                        } else {
                            propVal = value;
                        }
                        props.set(propTag, propVal);
                        instance.properties ??= props;
                    }
                }
            }

            currentRowInstances.forEach((instance, index) => {
                if (!instance.tag || !instance.model) {
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
     * @param {?string} name
     * @return {string}
     */
    getAlias(index, prefix, name) {
        const value = `${index}${name}`;
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
