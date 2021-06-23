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
Compares two objects (e.g. numbers) and returns `true` if they are equals. returns `false` otherwise.
Note if the two objects are not comparable (e.g. a number and a color) the result will be `false`.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Object | The first object to compare. |
| b | Object | The second object to compare. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| a == b | Boolean | `true` if a & b are equal. |

**/
export default class Equals extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {any} a
     * @param {any} b
     * @param {function(boolean)} setResult
     */
    onUpdate(context, [a, b], [setResult]) {
        setResult(typeof a.equals === 'function' ? a.equals(b) : a === b);
    }
}

registerBrick('01633f061f44e5e36b06', Equals);

