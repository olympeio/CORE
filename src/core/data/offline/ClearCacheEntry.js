import { ActionBrick, Cache, ErrorFlow, registerBrick } from 'olympe';

export default class ClearCacheEntry extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} cacheId
     * @param {function()} forwardEvent
     * @param {function(*)} setError
     */
    async update($, [cacheId], [forwardEvent, setError]) {
        try {
            await Cache.clearCache(cacheId);
            forwardEvent();
        } catch (error) {
            setError(ErrorFlow.create(`Failed to Clear Cache Entry "${cacheId}": ${error}`, 0));
        }
    }
}

registerBrick('0189f81aef1298e1d409', ClearCacheEntry);
