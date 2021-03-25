
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Returns the nearest integer to the given number.
For example: Round(1.1) returns 1.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Number | The number to round up. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| round(a) | Number | The nearest integer to `a`. |

**/
export default class Round extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} a
     * @param {function(number)} setResult
     */
    onUpdate(context, [a], [setResult]) {
        setResult(Math.round(a));
    }
}

registerBrick('01689e733cf446875997', Round);

