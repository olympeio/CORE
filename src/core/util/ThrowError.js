/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
