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
Return the part of the string going from `start` to `end` (limits included).
Note that the character at the end index is excluded from the result.

**Examples**
```
Substring('Olympe', 0, 5) -> 'Olymp'
Substring('Olympe', 1, 4) -> 'lym'
```

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s | String |  |
| start | Number | The index of the first character to include in the returned substring. |
| end | Number | The index of the first character to exclude from the returned substring. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| substring | String | The resulting string. |

**/
export default class SubString extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} s
     * @param {number} start
     * @param {number} end
     * @param {function(string)} setResult
     */
    onUpdate(context, [s, start, end], [setResult]) {
        setResult(String(s).substring(start, end));
    }
}

registerBrick('01626c0a49aef13d9bd3', SubString);

