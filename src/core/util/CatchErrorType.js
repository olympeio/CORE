
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
Catching an error from an error-flow, and if the given code is the same than the error code, it allows you to access
its details and trigger a control-flow. If the codes are different, it simply forward the error-flow.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Error Flow | Error Flow | The error flow from which to catch errors. |
| Code | Number | The error code that is accepted. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Control Flow | Control FLow | The output control flow. |
| Error Flow | Error Flow | The input error flow, if the input code and the error code are different. |
| Message | String | The error message. |

**/
export default class CatchErrorType extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {ErrorFlow} errorFlow
     * @param {number} code
     * @param {function(number)} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(string)} setMessage
     */
    onUpdate(context, [errorFlow, code], [forwardEvent, setErrorFlow, setMessage]) {
        if (code === errorFlow.getCode()) {
            setMessage(errorFlow.getMessage());
            forwardEvent(Date.now());
        } else {
            setErrorFlow(errorFlow);
        }
    }
}

registerBrick('016eeb5ede9f3094d900', CatchErrorType);
