
import { FunctionBrick, registerBrick } from 'olympe';

/**
## Description
Performs a modulo (remainder) operation between the 2 numbers passed as arguments.
It always takes the sign of the dividend.

**Examples**
```
12 % 5 == 2
5.5 % 2 == 1.5
```
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Number | First operand. |
| b | Number | Second operand. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| a mod b | Number | The result of the modulo operation. |

**/
export default class Modulo extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} a
     * @param {number} b
     * @param {function(number)} setResult
     */
    onUpdate(context, [a, b], [setResult]) {
        setResult(a % b);
    }
}

registerBrick('01626cae1b9d62b5eec9', Modulo);

