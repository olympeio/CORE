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
Creates a new control flow by joining two different control flows. The resulting flow is triggered whenever
one of the two joined flows is triggered.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Control flow 1 | Control Flow | The first control flow to join. |
| Control flow 2 | Control Flow | The second control flow to join. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Output control flow | Control Flow | The resulting control flow. |

**/
export default class ControlFlowMultiplexer extends FunctionBrick {

    /**
     * @override
     */
    setupUpdate(context, runUpdate, clear) {
        this.getInputs().forEach((input) => {
            context.observe(input, true).subscribe((value) => {
                if (value !== null) {
                    // Run function each time one of the 2 input is triggered
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
     * @param {number} incomingEvent
     * @param {function(number)} forwardEvent
     */
    onUpdate(context, [incomingEvent], [forwardEvent]) {
        forwardEvent(Date.now());
    }
}

registerBrick('016ab6f2396da4eb386f', ControlFlowMultiplexer);
