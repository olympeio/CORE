
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
Use startsWith js function: See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s1 | String | The string to search. |
| s2 | String | The string to be searched for at the end of s1. |
| pos | Number | offset into the string where start the compare. default = 0 |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| s1.startsWith(s2 | pos) | Boolean, True if s1 starts with s2 |

**/
export default class StringStartsWith extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {string} s1
     * @param {string} s2
     * @param {number} pos
     * @param {function(boolean)} setResult
     */
    onUpdate(context, [s1, s2, pos], [setResult]) {
        setResult(String(s1).startsWith(s2, pos));
    }
}

registerBrick('01717ca41e60689c2e50', StringStartsWith);

