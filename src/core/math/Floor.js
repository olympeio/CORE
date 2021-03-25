
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Returns the smallest integer smaller than or equal to the given number.
For example: Ceiling(1.1) returns 1.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Number | The number to round up. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| floor(a) | Number | The smallest integer smaller than or equal to a. |

**/
export default class Floor extends FunctionBrick {

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
        setResult(Math.floor(a));
    }
}

registerBrick('01689e5504ddebd62bfd', Floor);

