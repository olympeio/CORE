import { Brick, registerBrick, Order } from 'olympe';

export default class QuerySort extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {!Property} property
     * @param {string} direction
     * @param {function(!Query)} setQuery
     */
    update($, [query, property, direction], [setQuery]) {
        const order = direction === 'ascending' ? Order.ASC : Order.DESC;
        setQuery(query.sortBy(property, order));
    }
}

registerBrick('017ee95f47e53689a7c2', QuerySort);
