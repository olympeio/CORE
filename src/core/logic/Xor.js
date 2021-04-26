
import { FunctionBrick, registerBrick } from 'olympe';

/**
## Description
The `xor` of a set of operands is `true` if and only if only one of its operands is `true`.

**Examples**
```
true xor false == true
false xor false == false
true xor true == false
```
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Boolean | first operand. |
| b | Boolean | second operand. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | Boolean | `true` if only `a` or `b` is `true`. `false` otherwise. |

**/
export default class Xor extends FunctionBrick {

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
        setResult(( a || b ) && !( a && b ));
    }
}

registerBrick('01632a7b76b14a144a1c', Xor);

