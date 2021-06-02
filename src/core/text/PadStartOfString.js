
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
Use padStart js function. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s | String | String to pad. |
| length | Number | Output string length. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| padded string | String | Padded string. |

**/
export default class PadStartofString extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} s
     * @param {number} length
     * @param {function(string)} setPaddedString
     */
    onUpdate(context, [s, length], [setPaddedString]) {
        setPaddedString(s.padStart(length));
    }
}

registerBrick('01717ca5c5bc30fde055', PadStartofString);
