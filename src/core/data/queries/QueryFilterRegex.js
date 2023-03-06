import {Brick, Predicate, registerBrick} from 'olympe';
import {getLogger} from "logging";
import Regex from "../../text/Regex";

export default class QueryFilterRegex extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {!Property<string>} property
     * @param {string} regex
     * @param {boolean} caseSensitive
     * @param {function(!Query)} setQuery
     */
    update($, [query, property, regex, caseSensitive], [setQuery]) {
        try {
            const r = Regex.regexFromString(regex);
            setQuery(query.filter(Predicate.regex(property, r, caseSensitive)));
        } catch(e) {
            getLogger('Query Filter Regex').warn(`Invalid regular expression: ${e.message}`);
        }
    }
}

registerBrick('0186b14d0f320c1da418', QueryFilterRegex);
