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
        let otherValue = null;

        const updated = () => {
            if (defaultValue !== undefined && defaultValue !== null) {
                // When the default value is cleared, no need to run the function.
                runUpdate([defaultValue, otherValue]);
            } else {
                clear();
            }
        };

        const [valueInput, defaultValueInput] = this.getInputs();
        context.observe(defaultValueInput, true).subscribe((value) => {
            defaultValue = value;
            updated();
        });

        context.observe(valueInput, true).subscribe((value) => {
            otherValue = value;
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
