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
Returns `true` if `a` is smaller than `b`. If `strictly` is set to false, then it returns true if `a` is smaller or
equal to `b`.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Number | First operand. |
| b | Number | Second operand. |
| strictly | Boolean | `true` to make a strict comparison. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| a < b | Boolean | `true` is `a` is smaller than `b`. |
**/

export default class IsSmallerThan extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} a
     * @param {number} b
     * @param {boolean} strictly
     * @param {function(boolean)} setResult
     */
    onUpdate(context, [a, b, strictly], [setResult]) {
        setResult(strictly ? a < b : a <= b);
    }
}

registerBrick('01633efc7f259c4d2147', IsSmallerThan);
