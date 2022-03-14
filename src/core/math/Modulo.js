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

import { Brick, registerBrick } from 'olympe';

/**
## Description
Performs a modulo (remainder) operation between the 2 numbers passed as arguments.
It always takes the sign of the dividend.

**Examples**
```
12 % 5 == 2
5.5 % 2 == 1.5
```
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Number | First operand. |
| b | Number | Second operand. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| a mod b | Number | The result of the modulo operation. |

**/
export default class Modulo extends Brick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} a
     * @param {number} b
     * @param {function(number)} setResult
     */
    update(context, [a, b], [setResult]) {
        setResult(a % b);
    }
}

registerBrick('01626cae1b9d62b5eec9', Modulo);

