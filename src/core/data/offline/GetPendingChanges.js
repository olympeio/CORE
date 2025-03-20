import { ActionBrick, registerBrick, Cache, ErrorFlow } from 'olympe';

export default class GetPendingChanges extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     * @param {function(string)} setPendingChanges
     * @param {function(*)} setError
     */
    async update($, inputs, [forwardEvent, setPendingChanges, setError]) {
        try {
            const pendingChanges = await Cache.getPendingChanges();
            setPendingChanges(pendingChanges);
            forwardEvent();
        } catch (error) {
            setError(ErrorFlow.create(`Failed to Download Pending Transactions: ${error}`, 0));
        }
    }
}

registerBrick('018aac99052f20328070', GetPendingChanges);
