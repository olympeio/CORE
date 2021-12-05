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
The `or` of a set of operands is `true` if and only if one of its operands is `true`.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Boolean | first operand. |
| b | Boolean | second operand. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | Boolean | `true` if either `a` or `b` is `true`. `false` otherwise. |

**/
export default class Or extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {boolean} a
     * @param {boolean} b
     * @param {function(boolean)} setResult
     */
    update(context, [a, b], [setResult]) {
        setResult( a || b );
    }
}

registerBrick('01632a68f21892cad01b', Or);

