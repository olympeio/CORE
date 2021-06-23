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
Return the part of the string going from `start` to `end` (limits included).
Note that the character at the end index is excluded from the result.

**Examples**
```
Substring('Olympe', 0, 5) -> 'Olymp'
Substring('Olympe', 1, 4) -> 'lym'
```

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s | String |  |
| start | Number | The index of the first character to include in the returned substring. |
| end | Number | The index of the first character to exclude from the returned substring. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| substring | String | The resulting string. |

**/
export default class SubString extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} s
     * @param {number} start
     * @param {number} end
     * @param {function(string)} setResult
     */
    onUpdate(context, [s, start, end], [setResult]) {
        setResult(String(s).substring(start, end));
    }
}

registerBrick('01626c0a49aef13d9bd3', SubString);

