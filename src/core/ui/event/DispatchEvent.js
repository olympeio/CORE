import { ActionBrick, registerBrick } from 'olympe';
import getScopeContext from "../util/updateContextProperty";
import {getLogger} from 'logging';

/**
## Description
Dispatches the provided event
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| condition | Boolean | The condition. |
| true flow | Control Flow | The control flow to trigger when condition is `true`. |
| false flow | Control flow | The control flow to trigger when condition is `false`. |

**/
export default class DispatchEvent extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {*} _
     * @param {function()} forwardEvent
     */
    onUpdate(context, [_], [forwardEvent]) {
        const [scope, event] = getScopeContext(this, this.getInputs()[1]);
        const logger = getLogger('Dispatch Event');
        if (scope && event) {
            const scopeContext = context.getOtherContext(scope);
            if (scopeContext === null) {
                logger.error('The scope where to set the UI Property has not been found.\n',
                    '\tIt could be because you try to write on a scope of a model without adding the proper alias:', scope,
                    '\n\tOr because the context was not started at the time of the property was set.');
                return;
            }
            scopeContext.set(event, Date.now());

        } else {
            logger.log('There is no event to dispatch');
        }
        forwardEvent();
    }
}

registerBrick('01619e359987cdf3fc80', DispatchEvent);
