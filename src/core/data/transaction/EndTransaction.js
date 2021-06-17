
import { ActionBrick, registerBrick, ErrorFlow } from 'olympe';

/**
## Description
Marks the end of a series of transaction operations. The transaction is then executed.
## Errors
| Code | Description |
| --- | --- |
| 1 | The transaction was rejected. |

**/
export default class EndTransaction extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} _
     * @param {function()} forwardEvent
     * @param {function(!ErrorFlow)} dispatchError
     */
    onUpdate(context, _, [forwardEvent, dispatchError]) {
        // Extract the current transaction from the context.
        const transaction = context.getParent().popTransaction();
        if (transaction === null) {
            console.warn('End Transaction: no transaction begun');
            return;
        }

        transaction.execute((success, message) => {
            if (!success) {
                dispatchError(ErrorFlow.create(message || '', 1));
            } else {
                forwardEvent();
            }
        });
    }
}


registerBrick('0162f2ed1d1ba6349600', EndTransaction);
