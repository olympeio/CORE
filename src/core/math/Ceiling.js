
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Returns the smallest integer greater than or equal to the given number.
For example: Ceiling(1.1) returns 2.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Number | The number to round up. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| ceiling(a) | Number | The smallest integer greater than or equal to a. |

**/
export default class Ceiling extends FunctionBrick {

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
        setResult(Math.ceil(a));
    }
}

registerBrick('01689e69c0c3c9e89b12', Ceiling);

