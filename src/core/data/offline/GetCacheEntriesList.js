import { Brick, registerBrick, Cache } from 'olympe';
import { map } from 'rxjs/operators';

export default class GetCacheEntriesList extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        // pipe map is necessary here because the observable value is an array
        return Cache.getCacheEntries().pipe(map(v => [v]));
    }

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!Array<string>} cacheEntries
     * @param {function(!Array<string>)} setCacheEntries
     */
    update(context, [cacheEntries], [setCacheEntries]) {
        setCacheEntries(cacheEntries);
    }
}

registerBrick('018a4069e6380d63ae7f', GetCacheEntriesList);
