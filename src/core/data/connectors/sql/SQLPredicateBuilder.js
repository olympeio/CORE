import {Knex} from 'knex';

/**
 * @param {Knex.QueryBuilder} builder
 * @param {Knex.Raw} column
 * @param {!Object} objectPredicate
 */
export const parsePredicate = (builder, column, objectPredicate) => {
    switch (objectPredicate.name) {
        case 'CONTAINS':
            contains(builder, column, objectPredicate);
            break;
        case 'INEQUALITY_OPERATOR':
            inequality(builder, column, objectPredicate)
            break;
        case 'NOT':
            builder.whereNot((notBuilder) => {
                parsePredicate(notBuilder, column, objectPredicate.predicate);
            });
            break;
        case 'REGEX':
            regex(builder, column, objectPredicate);
            break;
        case 'EQUALS':
            equals(builder, column, objectPredicate.value);
            break;
        case 'IS':
            if (objectPredicate.tags.length > 0) {
                objectPredicate.tags.length > 1
                    ? isIn(builder, column, objectPredicate.tags)
                    : equals(builder, column, objectPredicate.tags[0]);
            }
            break;
    }
};

/**
 * @private
 * @param {!Knex.QueryBuilder} builder
 * @param {Knex.Raw} column
 * @param {!Array<*>} values
 */
const isIn = (builder, column, values) => {
    builder.whereIn(column, values);
};

/**
 * @private
 * @param {!Knex.QueryBuilder} builder
 * @param {Knex.Raw} column
 * @param {*} value
 */
const equals = (builder, column, value) => {
    value === null ? builder.whereNull(column) : builder.where(column, value);
};

/**
 * @private
 * @param {!Knex.QueryBuilder} builder
 * @param {Knex.Raw} column
 * @param {!*} predicateObject
 */
const inequality = (builder, column, predicateObject) => {
    const operator = predicateObject.operator + (predicateObject.strict ? '' : '=');
    builder.where(column, operator, predicateObject.value);
};
/**
 * @private
 * @param {!Knex.QueryBuilder} builder
 * @param {Knex.Raw} column
 * @param {!*} objectPredicate
 */
const contains = (builder, column, objectPredicate) => {
    const wildcard = translateWildcard('.*');
    // match substring by using .* wildcard at the start and end of the values being searched
    const matchSubstring = `${wildcard}${objectPredicate.value}${wildcard}`;
    const queryString = objectPredicate.caseSensitive ? '?? LIKE ?' : 'LOWER(??) LIKE LOWER(?)';
    builder.whereRaw(queryString, [column, matchSubstring,]);
}
/**
 * @private
 * @param {!Knex.QueryBuilder} builder
 * @param {Knex.Raw} column
 * @param {!*} objectPredicate
 */
const regex = (builder, column, objectPredicate) => {
    const regexJS = (/** @type {!RegExp} */ objectPredicate.pattern);
    const sqlRegex = toSQLRegex(regexJS, builder.client.dialect);
    const queryString = objectPredicate.caseSensitive ? '?? LIKE ?' : 'LOWER(??) LIKE ?';
    builder.whereRaw(queryString, [column, objectPredicate.caseSensitive ? sqlRegex : sqlRegex.toLowerCase()]);
}
/**
 * @private
 * @param {string} char
 * @return {string}
 */
const translateWildcard = char => {
    const wildCardsReplacement = {
        '.': '_',
        '.*': '%',
        '.+': '_%'
    };
    return wildCardsReplacement[char];
};
/**
 * @private
 * @param {RegExp} regex
 * @param {string} dialect
 * @return {string}
 */
const toSQLRegex = (regex, dialect) => {
    let start = '';
    let sqlRegex = '';
    let end = '';

    // are translated as such
    const normalChar = /^([-œŒæÆåÅøØ&/ß¡¿=àÀâÂäÄáÁéÉèÈêÊëËìÌîÎïÏòÒôÔöÖùÙûÛüÜçÇ’ñãõÃÕÑ:@,;]|\w|\s|\d|\\\\)/;

    // are escaped before translation
    const sqlSpecial = /^[%_'"]/;

    // the escape character is removed for translation, considered a normal character in SQL
    // noinspection RegExpRedundantEscape
    const withoutEscapeSQL = /^(\\\^|\\\/|\\\$|\\\.|\\\?|\\\*|\\\+|\\\(|\\\)|\\\[|\\\]|\\\{|\\\})/;

    // are RegExpr wildcards and need special translation
    const wildCards = /^(\.\*|\.\+|\.)/;


    let regexSource = regex.source;

    if (!regexSource.startsWith('^')) {
        // no start specified, can start with whatever
        start = '%';
    } else {
        regexSource = regexSource.substring(1, regexSource.length);
    }
    if (!regexSource.endsWith('$')) {
        // no end specified, can end with whatever
        end = '%';
    } else {
        regexSource = regexSource.substring(0, regexSource.length - 1);
    }
    while (regexSource !== '') {
        const [nextTranslatedToken, tokenLength] = translateNextToken(regexSource, dialect, sqlSpecial, wildCards, withoutEscapeSQL, normalChar);
        sqlRegex += nextTranslatedToken;
        regexSource = regexSource.substring(/** @type {number} */ (tokenLength), regexSource.length);
    }
    return start + sqlRegex + end;
}
/**
 * Match only the first token of `regexSource` among the RegExp given, in order of preference
 *
 * @private
 * @param {string} regexSource
 * @param {string} dialect
 * @param {RegExp} sqlSpecial
 * @param {RegExp} wildCards
 * @param {RegExp} withoutEscapeSQL
 * @param {RegExp} normalChar
 * @return {!Array<string | number>} next character match and length of token match
 */
const translateNextToken = (regexSource, dialect, sqlSpecial, wildCards, withoutEscapeSQL, normalChar) => {
    // RegExp.exec matches return RexExpExecArray: [matched_string, ...parenthesized_substring_matches, index:0_based_index_of_match, input:string_input]

    // first we match characters that need to be escaped in SQL
    const sqlMatch = sqlSpecial.exec(regexSource);
    if (sqlMatch) {
        return [escapeSpecialSQLChar(sqlMatch[0]), sqlMatch[0].length];
    }

    // second we match RegExp wildcards
    const wildCardsMatch = wildCards.exec(regexSource);
    if (wildCardsMatch) {
        return [translateWildcard(wildCardsMatch[0]), wildCardsMatch[0].length];
    }

    // match characters that needs escaping in RegExpr but not in SQL and thus need removal of escape character
    const withoutEscapeMatch = withoutEscapeSQL.exec(regexSource);
    if (withoutEscapeMatch) {
        const match = withoutEscapeMatch[0];
        if (dialect === 'mssql') {
            if (match[1] === '[' || match[1] === ']') {
                // in MSSQL, these symbols need to be escaped so we do not remove the escape character in this case.
                return [match, withoutEscapeMatch[0].length];
            }
        }
        // we remove the escape character
        return [match.substring(1, match.length), match.length];
    }

    // match regular character
    const normalCharMatch = normalChar.exec(regexSource);
    if (normalCharMatch) {
        // return the whole match (which is at index 0)
        return [normalCharMatch[0], normalCharMatch[0].length];
    }
    throw new Error(`Could find a match for character ${regexSource.charAt(0)}`);
}
/**
 * Escapes special character for SQL
 * @private
 * @param {string} char
 * @return {string}
 */
const escapeSpecialSQLChar = (char) => {
    return `\\${char}`;
}
