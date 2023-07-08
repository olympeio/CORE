import {Brick, Query, registerBrick} from 'olympe';

export default class QueryObject extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Tag} tag
     * @param {!Tag} type
     * @param {boolean} addToResult
     * @param {function(*)} setQuery
     */
    update($, [tag, type, addToResult], [setQuery]) {
        const query = Query.fromTag(tag, type);
        setQuery(addToResult ? query.andReturn() : query);
    }
}
registerBrick('0186984d975d0f64c48e', QueryObject);
