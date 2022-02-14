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
Returns `false` if its single operand can be converted to `true`; otherwise, returns `true`.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Boolean | The operand. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| !a | Boolean | The negated value. |

**/
export default class Not extends Brick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {boolean} a
     * @param {function(boolean)} setResult
     */
    update(context, [a], [setResult]) {
        setResult(!a);
    }
}

registerBrick('01632a7f645d8a5b265a', Not);

