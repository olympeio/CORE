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
