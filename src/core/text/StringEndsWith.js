/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { FunctionBrick, registerBrick } from 'olympe';

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
            setResult(String(s1).endsWith(s2, length));
        } else {
            setResult(String(s1).endsWith(s2));
        }
    }
}

registerBrick('01717ca51b73ccbd9292', StringEndsWith);
