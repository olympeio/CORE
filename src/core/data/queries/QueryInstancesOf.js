import { Brick, registerBrick, Query } from 'olympe';

export default class QueryInstancesOf extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Tag} dataType
     * @param {boolean} addToResult
     * @param {function(!Query)} setQuery
     */
    update($, [dataType, addToResult], [setQuery]) {
        const query = Query.instancesOf(dataType);
        setQuery(addToResult ? query.andReturn() : query);
    }
}

registerBrick('017ee95f166424bff3ac', QueryInstancesOf);
