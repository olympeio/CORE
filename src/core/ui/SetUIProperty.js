import { ActionBrick, registerBrick, ErrorFlow } from "olympe";
import getScopeContext from "./util/updateContextProperty";

/**
## Description
Sets the specified UI Property to the provided value.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| UI Property | Property | The UI property. |
| Value | Object | The value. |
## Errors
| Code | Description |
| --- | --- |
| undefined | undefined | The property doesn't exist for that component. |
| undefined | undefined | The scope (or context) couldn't be found. |

**/
export default class SetUIProperty extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {*} _
     * @param {*} value
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} dispatchErrorFlow
     */
    onUpdate(context, [_, value], [forwardEvent, dispatchErrorFlow]) {
        const [scope, property] = getScopeContext(this, this.getInputs()[1]);
        if (scope && property) {
            const scopeContext = context.getOtherContext(scope);
            if (scopeContext === null) {
                console.error('The scope where to set the UI Property has not been found.\n',
                    '\tIt could be because you try to write on a scope of a model without adding the proper alias:', scope,
                    '\n\tOr because the context was not started at the time of the property was set.');
                dispatchErrorFlow(ErrorFlow.create('Unknown scope', 2));
                return;
            }
            scopeContext.set(property, value);
            forwardEvent();

        } else {
            dispatchErrorFlow(ErrorFlow.create('Unknown Property', 1));
        }
    }
}

registerBrick('0162d2938cadad968805', SetUIProperty);
