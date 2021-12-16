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

    brick.update(new Context(), inputs, outputs);
};

export default testEqual;
