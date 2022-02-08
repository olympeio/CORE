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

registerBrick('017ed89e68db8cd10a01', QueryInstancesOf);
