import {Brick, CloudObject, Query, registerBrick} from 'olympe';

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
        // Create the CloudObjet in the local database so that it exists and can be queried to the right data source.
        const object = CloudObject.exists(tag) ? tag : CloudObject.createWith(new Map(), type);
        const query = Query.from(object);
        setQuery(addToResult ? query.andReturn() : query);
    }
}
registerBrick('0186984d975d0f64c48e', QueryObject);
