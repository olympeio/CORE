
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
Use trim js function: See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 ## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | s | String | The string to trim |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| s.trim() | String | Trimmed string |

**/
export default class TrimString extends FunctionBrick {

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
        setResult(s.trim());
    }
}

registerBrick('01717ca521db5a9c3c7c', TrimString);

