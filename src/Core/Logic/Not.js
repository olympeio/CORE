
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Returns `false` if its single operand can be converted to `true`; otherwise, returns `true`.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Boolean | The operand. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| !a | Boolean | The negated value. |

**/
export default class Not extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {boolean} a
     * @param {function(boolean)} setResult
     */
    onUpdate(context, [a], [setResult]) {
        setResult(!a);
    }
}

registerBrick('01632a7f645d8a5b265a', Not);

