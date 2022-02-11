import { Brick, registerBrick } from 'olympe';

export default class QueryLimit extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {number} limit
     * @param {number} offset
     * @param {function(!Query)} setQuery
     */
    update($, [query, limit, offset], [setQuery]) {
        setQuery(query.limit(limit, offset));
    }
}

registerBrick('017ee95f313cdfe1d7c2', QueryLimit);
