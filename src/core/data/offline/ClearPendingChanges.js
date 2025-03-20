import { ActionBrick, registerBrick, Cache, ErrorFlow } from 'olympe';

export default class ClearPendingChanges extends ActionBrick {

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
            await Cache.clearPendingChanges();
            forwardEvent();
        } catch (error) {
            setError(ErrorFlow.create(`Failed to Clear Pending Transactions: ${error}`, 0));
        }
    }
}

registerBrick('018aac97cebfaac7c179', ClearPendingChanges);
