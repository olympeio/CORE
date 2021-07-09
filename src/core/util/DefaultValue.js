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
Sets a value to be used when the main data-flow is unresolved.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| value | Object | The data-flow. |
| default value | Object | The value to use by default. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| output value | Object | the out-going data flow. |

**/
export default class Defaultvalue extends FunctionBrick {

    /**
     * @override
     */
    setupUpdate(context, runUpdate, clear) {
        let defaultValue = null;
        let value = null;

        const updated = () => {
            if (defaultValue !== undefined && defaultValue !== null) {
                // When the default value is cleared, no need to run the function.
                runUpdate([value, defaultValue]);
            } else {
                clear();
            }
        };

        const [valueInput, defaultValueInput] = this.getInputs();
        context.observe(valueInput, true).subscribe((v) => {
            value = v;
            updated();
        });

        context.observe(defaultValueInput, true).subscribe((v) => {
            defaultValue = v;
            updated();
        });
    }

    /**
     * @protected
     * @param {!Context} context
     * @param {!*} defaultValue
     * @param {!*} value
     * @param {function(!*)} setValue
     */
    onUpdate(context, [value, defaultValue], [setValue]) {
        setValue(value !== undefined && value !== null ? value : defaultValue);
    }
}

registerBrick('016ab6f231b7803c429a', Defaultvalue);
