
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
The `and` of a set of operands is true if and only if all of its operands are true.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Boolean | first operand. |
| b | Boolean | second operand. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | Boolean | `true` if both `a` & `b` are true. `false` otherwise. |

**/
export default class And extends FunctionBrick {

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
        setResult(a && b);
    }
}

registerBrick('01632a642d93817d8aca', And);

