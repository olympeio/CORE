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
This function switches between 2 data-flows based on the provided condition.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Condition | Boolean | The condition to test. |
| a | Object | The value to return on `true`. |
| b | Object | The value to return on `false`. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Condition ? a : b | Object | a if Condition is `true`, b otherwise. |

**/
export default class If extends FunctionBrick {

    /**
     * @override
     */
    setupUpdate(context, runUpdate, clear) {
        const values = [null, null, null];
        this.getInputs().forEach((input, index) => {
            context.observe(input, true).subscribe((value) => {
                values[index] = value;

                if (value !== null) {
                    runUpdate(values);
                } else {
                    clear();
                }
            });
        });
    }

    /**
     * @param {!Context} context
     * @param {?boolean} cond
     * @param {*} a
     * @param {*} b
     * @param {function(*)} setResult
     */
    onUpdate(context, [cond, a, b], [setResult]) {
        if (cond !== null) {
            setResult(cond ? a : b);
        }
    }
}

registerBrick('01633eaa139d1f5e2fc4', If);

