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

