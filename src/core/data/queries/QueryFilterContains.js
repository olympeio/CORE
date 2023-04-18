import {Brick, Predicate, registerBrick} from 'olympe';

export default class QueryFilterContains extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {!Property<string>} property
     * @param {string} value
     * @param {boolean} caseSensitive
     * @param {function(!Query)} setQuery
     */
    update($, [query, property, value, caseSensitive], [setQuery]) {
        setQuery(query.filter(Predicate.contains(property, value, caseSensitive)))
    }
}

registerBrick('0186b13a4d0fac5488a2', QueryFilterContains);
