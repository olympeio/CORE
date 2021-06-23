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
import {getLogger} from 'logging';

/**
## Description
Performs the named mathematical function.
**Example**:
```
Math('acos', 0.5) -> 1.0471975511965979
Math('log', 10) -> 2.302585092994046
```

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| functionName | String | The name of the mathematical function to perform. |
| input | Number | The input value. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | Number | The result. |
**/
export default class MathFunctions extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} functionName
     * @param {number} input
     * @param {function(number)} setResult
     */
    onUpdate(context, [functionName, input], [setResult]) {
        const func = Math[functionName];
        const logger = getLogger('Math Functions');

        if (!func) {
            logger.error(`Unknown function ${functionName}!`);
        } else if (func.length !== 1) {
            logger.error(`${functionName} is not a single param function!`);
        } else if (typeof input !== 'number') {
            logger.error(`Input is not a number!`);
        } else {
            setResult(func(input));
        }
    }
}

registerBrick('016326a54b2c1837bdda', MathFunctions);
