
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Returns `true` if `a` is smaller than `b`. If `strictly` is set to false, then it returns true if `a` is smaller or
equal to `b`.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Number | First operand. |
| b | Number | Second operand. |
| strictly | Boolean | `true` to make a strict comparison. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| a < b | Boolean | `true` is `a` is smaller than `b`. |

**/
export default class IsSmallerThan extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} a
     * @param {number} b
     * @param {boolean} strictly
     * @param {function(boolean)} setResult
     */
    onUpdate(context, [a, b, strictly], [setResult]) {
        setResult(strictly ? a < b : a <= b);
    }
}

registerBrick('01633efc7f259c4d2147', IsSmallerThan);

