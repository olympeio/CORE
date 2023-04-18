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
Returns the character at the specified index
Use chartAt js function. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s | String | Initial string |
| index | Number | Index of char |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| s.charAt(index) | String | The char at given position, undefined is no string found |
**/

export default class CharAt extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} s
     * @param {number} index
     * @param {function(string)} setResult
     */
    update(context, [s, index], [setResult]) {
        setResult(String(s).charAt(index));
    }
}

registerBrick('01717ca4161bc06ad75e', CharAt);
