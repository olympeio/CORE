import { Brick, registerBrick, Predicate } from 'olympe';

export default class QueryFilter extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {!Property} property
     * @param {string} filterType
     * @param {*} value
     * @param {function(!Query)} setQuery
     */
    update($, [query, property, filterType, value], [setQuery]) {
        setQuery(query.filter(QueryFilter.getPredicate(filterType, property, value)));
    }

    /**
     * @static
     * @param {string} filterType
     * @param {!Property<*>} property
     * @param {*} value
     * @return {!Predicate}
     */
    static getPredicate(filterType, property, value) {
        switch(filterType) {
            case 'equals': return Predicate.equals(property, value);
            case 'different': return Predicate.not(Predicate.equals(property, value));
            case 'contains': return Predicate.contains(property, value, true);
            case 'greater than': return Predicate.greaterThan(property, value, true);
            case 'greater or equals': return Predicate.greaterThan(property, value, false);
            case 'smaller than': return Predicate.smallerThan(property, value, true);
            case 'smaller or equals': return Predicate.smallerThan(property, value, false);
            case 'regexp': return Predicate.regex(property, value, true);

            // Should never happen
            default: throw new Error('[QueryFilter] unknown filter type "' + filterType + '"');
        }
    }
}

registerBrick('017ee95e638e4ab1057c', QueryFilter);
