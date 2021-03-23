
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Returns the character at the specified index
Use chartAt js function. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s | String | Initial string |
| index | Number | Index of char |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| s.charAt(index) | String | The char at given position, undefined is no string found |

**/
export default class CharAt extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} s
     * @param {number} index
     * @param {function(string)} setResult
     */
    onUpdate(context, [s, index], [setResult]) {
        setResult(s.charAt(index));
    }
}

registerBrick('01717ca4161bc06ad75e', CharAt);

