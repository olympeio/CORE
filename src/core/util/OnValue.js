import { FunctionBrick, registerBrick } from 'olympe';

/**
## Description
This functions triggers the output control-flow every time the value of the input data-flow changes.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Value | Object | The input data-flow. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Value | Object | A replication of the input data-flow. |
| Control Flow | Control Flow | The output control flow. |

**/
export default class OnValue extends FunctionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {*} value
     * @param {function(*)} setValue
     * @param {function(*)} emitEvent
     */
    onUpdate(context, [value], [emitEvent, setValue]) {
        // Transfers the value to the output
        setValue(value);

        // Dispatches a new event (control flow)
        emitEvent(Date.now());
    }
}

registerBrick('016682d396a6b4c97363', OnValue);
