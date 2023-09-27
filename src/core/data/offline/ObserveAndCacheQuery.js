import { Brick, Query, registerBrick } from 'olympe';
import { getLogger } from "logging";

export default class ObserveAndCacheQuery extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} query
     * @param {string} cacheId
     * @param {function(*)} setQueryResult
     */
    update($, [query, cacheId], [setQueryResult]) {
        if (query instanceof Query) {
            query.observe($).subscribe(setQueryResult, {cacheId: cacheId ? cacheId : undefined});
        } else {
            getLogger('ObserveQuery').error(`The provided Query is not a Query object`);
        }
    }
}

registerBrick('018aacb251666f17cc4d', ObserveAndCacheQuery);
