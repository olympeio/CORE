
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Returns a new string containing the value of the string converted to upper case.

**Example**: toLowerCase('Olympe') -> 'OLYMPE'

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s | String | The string to convert. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | String | The resulting string. |

**/
export default class ToUppercase extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} s
     * @param {function(string)} setResult
     */
    onUpdate(context, [s], [setResult]) {
        setResult(String(s).toLocaleUpperCase());
    }
}

registerBrick('01626bea618ee1a2b011', ToUppercase);

