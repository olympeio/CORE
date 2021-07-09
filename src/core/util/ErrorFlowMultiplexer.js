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
Creates a new error flow by joining up to 4 error flows. The resulting flow is triggered whenever
one of the two joined flows is triggered.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Error flow 1 | Error Flow | The first error flow to join. |
| Error flow 2 | Error Flow | The second error flow to join. |
| Error flow 3 | Error Flow | The third error flow to join. |
| Error flow 4 | Error Flow | The fourth error flow to join. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Error Flow | Error Flow | The resulting error flow. |

**/
export default class ErrorFlowMultiplexer extends FunctionBrick {

    /**
     * @override
     */
    setupUpdate(context, runUpdate, clear) {
        this.getInputs().forEach((input) => {
            context.observe(input, true).subscribe((value) => {
                if (value !== null) {
                    // Run function each time one of the 4 inputs is triggered
                    runUpdate([value]);
                } else {
                    clear();
                }
            });
        });
    }

    /**
     * @protected
     * @param {!Context} context
     * @param {!ErrorFlow} incomingEvent
     * @param {function(ErrorFlow)} forwardError
     */
    onUpdate(context, [errorFlow], [forwardError]) {
        forwardError(errorFlow);
    }
}

registerBrick('016eeb5ede9f3094d910', ErrorFlowMultiplexer);
