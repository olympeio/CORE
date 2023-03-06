import {Brick, Query, registerBrick} from 'olympe';

export default class QueryObject extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} object
     * @param {boolean} addToResult
     * @param {function(*)} setQuery
     */
    update($, [object, addToResult], [setQuery]) {
        const query = Query.from(object);
        setQuery(addToResult ? query.andReturn() : query);
    }
}
registerBrick('0186984d975d0f64c48e', QueryObject);
