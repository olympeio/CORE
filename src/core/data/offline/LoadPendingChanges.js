import { ActionBrick, registerBrick, Cache, ErrorFlow } from 'olympe';

export default class LoadPendingChanges extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} pendingChanges
     * @param {function()} forwardEvent
     * @param {function(*)} setError
     */
    async update($, [pendingChanges], [forwardEvent, setError]) {
        try {
            await Cache.loadPendingChanges(pendingChanges);
            forwardEvent();
        } catch (error) {
            setError(ErrorFlow.create(`Failed to Sync Cache With Cloud: ${error}`, 0));
        }
    }
}

registerBrick('018ab7ef48f739de301a', LoadPendingChanges);
