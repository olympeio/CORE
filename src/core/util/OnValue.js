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
This functions triggers the output control-flow every time the value of the input data-flow changes.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Value | Object | The input data-flow. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Value | Object | A replication of the input data-flow. |
| Control Flow | Control Flow | The output control flow. |

**/
export default class OnValue extends FunctionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {*} value
     * @param {function(*)} setValue
     * @param {function(*)} emitEvent
     */
    onUpdate(context, [value], [emitEvent, setValue]) {
        // Transfers the value to the output
        setValue(value);

        // Dispatches a new event (control flow)
        emitEvent(Date.now());
    }
}

registerBrick('016682d396a6b4c97363', OnValue);
