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
Returns `true` if `a` is bigger than `b`. If `strictly` is set to false, then it returns true if `a` is bigger or
equal to `b`.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Number | First operand. |
| b | Number | Second operand. |
| strictly | Boolean | `true` to make a strict comparison. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| a > b | Boolean | `true` is `a` is greater than `b`. |
**/

export default class IsGreaterThan extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} a
     * @param {number} b
     * @param {boolean} strictly
     * @param {function(boolean)} setResult
     */
    onUpdate(context, [a, b, strictly], [setResult]) {
        setResult(strictly ? a > b : a >= b);
    }
}

registerBrick('01633eddc42e7ea58ee6', IsGreaterThan);
