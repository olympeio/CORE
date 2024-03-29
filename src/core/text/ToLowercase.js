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
Returns a new string containing the value of the string converted to lower case.

**Example**: toLowerCase('Olympe') -> 'olympe'

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s | String | The string to convert. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | String | The resulting string. |

**/
export default class ToLowercase extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} s
     * @param {function(string)} setResult
     */
    update(context, [s], [setResult]) {
        setResult(String(s).toLocaleLowerCase());
    }
}

registerBrick('01626bf37c1b604aa550', ToLowercase);

