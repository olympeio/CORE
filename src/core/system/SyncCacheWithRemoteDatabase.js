import { ActionBrick, registerBrick, ErrorFlow } from 'olympe';

export default class SyncCacheWithRemoteDatabase extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     * @param {function(*)} setError
     */
    async update($, inputs, [forwardEvent, setError]) {
        try {
            await Cache.syncWithCloud();
            forwardEvent();
        } catch (error) {
            setError(ErrorFlow.create(`Failed to sync with remote data source: ${error}`));
        }
    }
}

registerBrick('018a183f308d4f5d48dd', SyncCacheWithRemoteDatabase);
