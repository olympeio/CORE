import { ActionBrick, registerBrick } from 'olympe';

/**
## Description
Returns `true` if the value passed is `null` or `undefined` at the time this action is triggered.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| value | Object | The value to check. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | Boolean | `true` if the value is either `null` or `undefined`. |
| forwardEvent | ControlFlow |
**/
export default class IsNull extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {Object} value
     * @param {function(boolean)} setResult
     * @param {function()} forwardEvent
     */
    onUpdate(context, [value], [setResult, forwardEvent]) {
        // Set result to true if current value is undefined
        setResult(value === undefined || value === null);
        forwardEvent();
    }
}

registerBrick('0168e64dbc1811cf5823', IsNull);
