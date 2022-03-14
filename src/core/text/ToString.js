
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
Returns the string representation of the object.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| n | Object | The object to convert. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| string | String | The resulting string. |

**/
export default class ToString extends Brick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {Object} n
     * @param {function(string)} setString
     */
    update(context, [n], [setString]) {
        setString(String(n));
    }
}

registerBrick('01626cb3ca38d45646f8', ToString);
