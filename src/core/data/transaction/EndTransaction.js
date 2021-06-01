
import { ActionBrick, registerBrick, Context, ErrorFlow } from 'olympe';

/**
## Description
Marks the end of a series of transaction operations. The transaction is then executed.
## Errors
| Code | Description |
| --- | --- |
| undefined | undefined | The transaction was rejected. |

**/
export default class EndTransaction extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {function(ErrorFlow} errorFlow
     * @param {function} forwardEvent
     */
    onUpdate(context, [], [errorFlow,forwardEvent]) {
        context.releaseTransaction(((executed, success, errMsg) => {
            if (success)
                forwardEvent()
            else
                errorFlow(ErrorFlow.create(errMsg, undefined))
        }))
    }
}


registerBrick('0162f2ed1d1ba6349600', EndTransaction);
