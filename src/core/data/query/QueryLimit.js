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

registerBrick('017ed89f7a5d1a0b7739', QueryLimit);
