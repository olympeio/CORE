import { Brick, registerBrick, Query } from 'olympe';

export default class QueryInstancesOf extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Tag} dataType
     * @param {boolean} inheritance
     * @param {boolean} addToResult
     * @param {function(!Query)} setQuery
     */
    update($, [dataType, inheritance, addToResult], [setQuery]) {
        const query = Query.instancesOf(dataType, inheritance);
        setQuery(addToResult ? query.andReturn() : query);
    }
}

registerBrick('017ee95f166424bff3ac', QueryInstancesOf);
