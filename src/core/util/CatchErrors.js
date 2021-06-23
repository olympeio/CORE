
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

import { FunctionBrick, registerBrick, Context, ErrorFlow } from 'olympe';

/**
 ## Description
 Catching an error from an error-flow allows you to access its details and trigger a control-flow every time an
 error is thrown.

 ## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | Error Flow | Error Flow | The error flow from which to catch errors. |
 ## Outputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | Message | String | The error message. |
 | Code | Number | The error code. |
 | Control Flow | Control FLow | The output control flow. |

 **/
export default class CatchErrors extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {ErrorFlow} errorFlow
     * @param {function(number)} forwardEvent
     * @param {function(string)} setMessage
     * @param {function(number)} setCode
     */
    onUpdate(context, [ errorFlow], [ forwardEvent, setMessage, setCode ]) {
        setMessage(errorFlow.getMessage());
        setCode(errorFlow.getCode());
        forwardEvent(Date.now());
    }
}

registerBrick('016eeb5ede9f3094d8f5', CatchErrors);
