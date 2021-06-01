
import { ActionBrick, registerBrick, Context, DBView, Direction, transformers } from 'olympe';

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
        const srcScopeRel = new transformers.Related('0168a431d91f25780002', Direction.DESTINATION);
        const srcPropertyRel = new transformers.Related('0168a431d91f25780004', Direction.DESTINATION);
        const destScopeRel = new transformers.Related('0168a431d91f2578000a', Direction.DESTINATION);
        const destInputRel = new transformers.Related('0168a431d91f2578000b', Direction.DESTINATION);
        const eventPropTag = '01619e359987cdf3fc81';

        const eventPipe = DBView.get().findRelated(this, [destScopeRel.getInverse()],
            (pipe) => DBView.get().getUniqueRelated(pipe, destInputRel) === eventPropTag);
        if (eventPipe) {
            const scope = DBView.get().getUniqueRelated(eventPipe, srcScopeRel);
            const event = DBView.get().getUniqueRelated(eventPipe, srcPropertyRel);
            const scopeContext = scope ? context.getOtherContext(scope) : context;

            if (scopeContext === null) {
                console.error('The scope where to dispatch event has not been found. ' +
                    'It could be because you try to write on a scope of a model without adding the proper alias:', scope);
                return;
            }

            if (event) {
                scopeContext.set(event, Date.now());
            }
        } else {
            console.log('There is no event to dispatch');
        }

        forwardEvent();
    }
}

registerBrick('01619e359987cdf3fc80', DispatchEvent);
