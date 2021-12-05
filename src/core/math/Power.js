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
Returns the base to the exponent.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Number | The base number. |
| b | Number | The exponent used to raise the base. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| a ** b | Number | The result of the operation. |

**/
export default class Power extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} a
     * @param {number} b
     * @param {function(number)} setAb
     */
    update(context, [a, b], [setAb]) {
        setAb(a ** b);
    }
}

registerBrick('01626cb10bc0db70e256', Power);

