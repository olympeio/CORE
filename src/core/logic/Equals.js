
import { FunctionBrick, registerBrick } from 'olympe';

/**
## Description
Compares two objects (e.g. numbers) and returns `true` if they are equals. returns `false` otherwise.
Note if the two objects are not comparable (e.g. a number and a color) the result will be `false`.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Object | The first object to compare. |
| b | Object | The second object to compare. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| a == b | Boolean | `true` if a & b are equal. |

**/
export default class Equals extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {any} a
     * @param {any} b
     * @param {function(boolean)} setResult
     */
    onUpdate(context, [a, b], [setResult]) {
        setResult(typeof a.equals === 'function' ? a.equals(b) : a === b);
    }
}

registerBrick('01633f061f44e5e36b06', Equals);

