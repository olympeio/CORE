import { Brick, registerBrick, Query } from 'olympe';

export default class QueryInstancesOf extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Tag} dataType
     * @param {function(!Query)} setQuery
     */
    update($, [dataType], [setQuery]) {
        setQuery(Query.instancesOf(dataType));
    }
}

registerBrick('017ee95f166424bff3ac', QueryInstancesOf);
