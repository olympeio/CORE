import {Brick, Predicate, registerBrick} from 'olympe';

export default class QueryFilterIsObject extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {!Tag | !Tag[]} objects
     * @param {function(!Query)} setQuery
     */
    update($, [query, objects], [setQuery]) {
        const array = Array.isArray(objects) ? objects : [objects];
        setQuery(query.filter(Predicate.is(...array)));
    }
}

registerBrick('0186b15a8b63513b2e4b', QueryFilterIsObject);
