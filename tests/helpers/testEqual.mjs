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

import { Context } from 'olympe';

/**
 * @param {Object} brick brick instance to test
 * @param {Array<*>} inputs input values against which to test
 * @param {Array<*>} expectedOutputs expected output values (without control flow)
 * @param {number=} controlFlowIndex index of the brick control flow output (if any)
 */
export const testEqual = (brick, inputs, expectedOutputs, controlFlowIndex) => {

    // Add output value testers
    const outputs = [];
    for (const value of expectedOutputs) {
        outputs.push((out) => {
            expect(out).toEqual(value);
        });
    }

    // If necessary, add control flow output tester
    if (controlFlowIndex !== undefined) {
        outputs.splice(controlFlowIndex, 0, (controlFlow) => {
            expect(controlFlow).toBeLessThanOrEqual(Date.now())
        });
    }

    brick.onUpdate(new Context(), inputs, outputs);
};

export default testEqual;
