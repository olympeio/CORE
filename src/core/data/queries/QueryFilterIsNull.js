import {Brick, Predicate, registerBrick} from 'olympe';

export default class QueryFilterIsNull extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {!Property} property
     * @param {function(!Query)} setQuery
     */
    update($, [query, property], [setQuery]) {
        setQuery(query.filter(Predicate.equals(property, null)));
    }
}

registerBrick('0186b17c8c48d293f8c0', QueryFilterIsNull);
