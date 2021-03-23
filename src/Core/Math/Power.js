
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Returns the base to the exponent.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Number | The base number. |
| b | Number | The exponent used to raise the base. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| a ** b | Number | The result of the operation. |

**/
export default class Power extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} a
     * @param {number} b
     * @param {function(number)} setAb
     */
    onUpdate(context, [a, b], [setAb]) {
        setAb(a ** b);
    }
}

registerBrick('01626cb10bc0db70e256', Power);

