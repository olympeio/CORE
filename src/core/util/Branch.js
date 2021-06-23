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
Trigger the `true` or `false` control flow depending on `condition`.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| condition | Boolean | The condition. |
| control flow | Control Flow | The triggering control flow. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| true flow | Control Flow | The control flow to trigger when condition is `true`. |
| false flow | Control Flow | The control flow to trigger when condition is `false`. |

**/
export default class Branch extends FunctionBrick {

    /**
     * @override
     */
    setupUpdate(context, runUpdate, clear) {
        const [incomingEvent, inputCondition] = this.getInputs();

        let condition = false;
        context.observe(inputCondition, true).subscribe((inputValue) => {
            condition = inputValue !== null ? Boolean(inputValue) : false;
        });

        // Run runCoreUpdate only when incoming event is triggered.
        context.observe(incomingEvent, true).subscribe((timestamp) => {
            if (timestamp !== null) {
                // Execute the action only if the control flow has a value.
                runUpdate([condition]);
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
     * @param {boolean} condition
     * @param {function(number)} trueDispatcher
     * @param {function(number)} falseDispatcher
     */
    onUpdate(context, [condition], [trueDispatcher, falseDispatcher]) {
        condition ? trueDispatcher(Date.now()) : falseDispatcher(Date.now());
    }
}

registerBrick('01633fd9f28ce400a0a1', Branch);
