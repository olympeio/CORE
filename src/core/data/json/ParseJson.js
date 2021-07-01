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

import { FunctionBrick, registerBrick, Context } from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Parses a JSON string and extract the object specified by the path.
The path is specified in dotted form.
**Example**:
```
ParseJson('{ "a": { "b": "hello"}}, 'a.b') -> "hello"
```
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| source | String | The JSON string. |
| path | String | The path |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | Object |  |

**/
export default class ParseJson extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} source
     * @param {string} path
     * @param {function(Object)} setResult
     */
    onUpdate(context, [source, path], [setResult]) {
        try {
            const obj = JSON.parse(source);

            // If the path specifies an entry in an array, we should not add the "dot" for the return statement.
            const isArray = path.substr(0, 1) === '[';

            // eslint-disable-next-line no-new-func
            const fn = new Function('obj', 'return obj' + (isArray ? '' : '.') + path + ';');
            const outputObj = fn(obj);
            if (outputObj !== undefined) {
                if (outputObj instanceof Object) {
                    setResult(JSON.stringify(outputObj));
                } else {
                    setResult(outputObj);
                }
            }
        } catch(e) {
            getLogger('Parse JSON').error(e.message);
        }

    }
}

registerBrick('0162e331fae562c33ef7', ParseJson);
