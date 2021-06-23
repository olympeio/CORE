
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
Attempts to parse the provided string to convert it into a boolean value.
I.E. If the string is 'true' (case-insensitive match), then it returns `true`, otherwise `false`.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s | String | The string to convert. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| boolean | Boolean | The result of the conversion. |

**/
export default class ParseBoolean extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} s
     * @param {function(boolean)} setBoolean
     */
    onUpdate(context, [s], [setBoolean]) {
        setBoolean(String(s).toLowerCase() === "true");
    }
}

registerBrick('01633f1440e8af58e199', ParseBoolean);
