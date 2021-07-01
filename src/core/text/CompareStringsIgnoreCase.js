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
Returns a number indicating whether the reference string s2 comes before, after, or is equivalent to s1 string in sort order, ignoring the case
Use localeCompare js function. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | s1 | String | The first string |
 | s2 | String | The second string |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| s1.localeCompare(s2) | Number | -1 if s1 < s2, 0 if s1 == s2, 1 if s1 > s2, ignoring case. |
**/
export default class CompareStringsIgnoreCase extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Context} context
     * @param {string} s1
     * @param {string} s2
     * @param {function(number)} setResult
     */
    onUpdate(context, [s1, s2], [setResult]) {
        setResult(String(s1).toLocaleLowerCase().localeCompare(String(s2).toLocaleLowerCase()));
    }
}

registerBrick('01717c91b5f57d8e871b', CompareStringsIgnoreCase);

