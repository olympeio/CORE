import { Brick, Query, registerBrick } from 'olympe';

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
            query.observe($, {cacheId: cacheId ? cacheId : undefined}).subscribe(setQueryResult);
        } else {
            throw new Error(`The provided Query is not a Query object: ${query}`);
        }
    }
}

registerBrick('018aacb251666f17cc4d', ObserveAndCacheQuery);
