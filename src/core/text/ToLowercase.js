
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Returns a new string containing the value of the string converted to lower case.

**Example**: toLowerCase('Olympe') -> 'olympe'

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s | String | The string to convert. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | String | The resulting string. |

**/
export default class ToLowercase extends FunctionBrick {

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
        setResult(s.toLocaleLowerCase());
    }
}

registerBrick('01626bf37c1b604aa550', ToLowercase);

