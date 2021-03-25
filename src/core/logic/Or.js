
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
The `or` of a set of operands is `true` if and only if one of its operands is `true`.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Boolean | first operand. |
| b | Boolean | second operand. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | Boolean | `true` if either `a` or `b` is `true`. `false` otherwise. |

**/
export default class Or extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {boolean} a
     * @param {boolean} b
     * @param {function(boolean)} setResult
     */
    onUpdate(context, [a, b], [setResult]) {
        setResult( a || b );
    }
}

registerBrick('01632a68f21892cad01b', Or);

