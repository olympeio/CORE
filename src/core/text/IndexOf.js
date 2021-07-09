
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
Gets the position of string s2 in string s1. The index starts at zero, and is set to -1 if the substring is not present.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s1 | String | The string to search in. |
| s2 | String | The substring to search for. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| s1.indexOf(s2) | Number | The index. |

**/
export default class IndexOf extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} s1
     * @param {string} s2
     * @param {function(number)} setIndex
     */
    onUpdate(context, [s1,s2], [setIndex]) {
        setIndex(s1.indexOf(s2));
    }
}

registerBrick('01626bffe70e5120c69c', IndexOf);
