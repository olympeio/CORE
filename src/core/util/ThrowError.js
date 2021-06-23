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

import { FunctionBrick, registerBrick, ErrorFlow } from 'olympe';

/**
## Description
Throwing an error creates an error-flow which can be either caught or passed on to the output error-flow of the
action.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Message | String | The error message. |
| Code | Number | The error code. |
| Control Flow | Control FLow | The control flow used to trigger the error. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Error Flow | Error Flow | The created error flow. |

**/
export default class ThrowError extends FunctionBrick {

    /**
     * @override
     */
    setupUpdate(context, runUpdate, clear) {
        const [incomingEvent, inputMessage, inputCode] = this.getInputs();

        let message = '';
        context.observe(inputMessage, true).subscribe((inputValue) => {
             message = inputValue !== null ? String(inputValue) : '';
        });

        let code = '';
        context.observe(inputCode, true).subscribe((inputValue) => {
            code = inputValue !== null ? Number(inputValue) : 0;
        });

        // Run runCoreUpdate only when incoming event is triggered.
        context.observe(incomingEvent, true).subscribe((timestamp) => {
            if (timestamp) {
                // Execute the action only if the control flow has a value.
                runUpdate([message, code]);
            } else {
                clear();
            }
        });
    }

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} message
     * @param {number} code
     * @param {function(ErrorFlow)} setErrorFlow
     */
    onUpdate(context, [message, code], [setErrorFlow]) {
        setErrorFlow(ErrorFlow.create(message, code));
    }
}

registerBrick('016eeb5ede9f3094d8fa', ThrowError);
