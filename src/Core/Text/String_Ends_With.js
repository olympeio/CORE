
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
Use endsWith js function: See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s1 | String | The string to search. |
| s2 | String | The string to be searched for at the end of s1. |
| length | Number | Used as the length of str. Defaults to -1 which means s1.length. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| s1.endsWith(s2, length) | Boolean | True if s1 ends with s2 |

**/
export default class StringEndsWith extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} s1
     * @param {string} s2
     * @param {number} length
     * @param {function(boolean)} setResult
     */
    onUpdate(context, [s1, s2, length], [setResult]) {
        if (length >= 0) {
            setResult(s1.endsWith(s2, length));
        } else {
            setResult(s1.endsWith(s2));
        }
    }
}

registerBrick('01717ca51b73ccbd9292', StringEndsWith);

