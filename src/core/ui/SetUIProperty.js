import { ActionBrick, registerBrick, ErrorFlow, DBView, Direction, transformers} from "olympe";

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
     * @param {PropertyPrimitive} _
     * @param {*} value
     * @param {function()} dispatchControlFlow
     * @param {function(ErrorFlow)} dispatchErrorFlow
     */
    onUpdate(context, [_, value], [dispatchErrorFlow, dispatchControlFlow]) {
        const srcScopeRel = new transformers.Related('0168a431d91f25780002', Direction.DESTINATION);
        const srcPropertyRel = new transformers.Related('0168a431d91f25780004', Direction.DESTINATION);
        const destScopeRel = new transformers.Related('0168a431d91f2578000a', Direction.DESTINATION);
        const destInputRel = new transformers.Related('0168a431d91f2578000b', Direction.DESTINATION);
        const UIPropertyInput = '0162d293ab6f65c86c52';
        const propertyPipe = DBView.get().findRelated(this, [destScopeRel.getInverse()],
            (pipe) => DBView.get().getUniqueRelated(pipe, destInputRel) === UIPropertyInput);
        if (propertyPipe) {
            const scope = DBView.get().getUniqueRelated(propertyPipe, srcScopeRel);
            const property = DBView.get().getUniqueRelated(propertyPipe, srcPropertyRel);
            const scopeContext = scope ? context.getOtherContext(scope) : context;

            if (scopeContext === null) {
                console.error('The scope where to set the UI Property has not been found.\n',
                    '\tIt could be because you try to write on a scope of a model without adding the proper alias:', scope,
                    '\n\tOr because the context was not started at the time of the property was set.');
                dispatchErrorFlow(ErrorFlow.create('Unknown scope', 2));
                return;
            }
            if (property) {
                scopeContext.set(property, value);
            }
            dispatchControlFlow();
        } else {
            dispatchErrorFlow(ErrorFlow.create('Unknown Property', 1));
        }
    }
}

registerBrick('0162d2938cadad968805', SetUIProperty);
