
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
This function switches between 2 data-flows based on the provided condition.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Condition | Boolean | The condition to test. |
| a | Object | The value to return on `true`. |
| b | Object | The value to return on `false`. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Condition ? a : b | Object | a if Condition is `true`, b otherwise. |

**/
export default class If extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {boolean} cond
     * @param {any} a
     * @param {any} b
     * @param {fonction(any)} setResult
     */
    onUpdate(context, [cond, a, b], [setResult]) {
        setResult(cond ? a : b);
    }
}

registerBrick('01633eaa139d1f5e2fc4', If);

