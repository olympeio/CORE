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
