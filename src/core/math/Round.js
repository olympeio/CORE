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
Returns the nearest integer to the given number.
For example: Round(1.1) returns 1.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| a | Number | The number to round up. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| round(a) | Number | The nearest integer to `a`. |

**/
export default class Round extends Brick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} a
     * @param {function(number)} setResult
     */
    update(context, [a], [setResult]) {
        setResult(Math.round(a));
    }
}

registerBrick('01689e733cf446875997', Round);

