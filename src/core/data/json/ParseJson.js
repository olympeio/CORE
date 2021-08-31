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
import {JSONPath} from 'jsonpath';

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
        // Guards
        if(typeof source !== 'string') {
            getLogger('Parse JSON').error("Provided source is not a string");
            return;
        }
        if(typeof path !== 'string') {
            getLogger('Parse JSON').error("Provided path is not a string");
            return;
        }

        let obj, resArray;
        try {
            obj = JSON.parse(source);
        } catch(e) {
            getLogger('Parse JSON').error("Error when parsing source: "+e.message);
            return;
        }

        // prevent empty path from rising an error in jsonpath
        if(path.length === 0) {
            return;
        }
        // support access of array using syntax [i] (legacy spec)
        if(path.startsWith('[')) {
            path = '$'+path;
        }

        try {
            const jp = new JSONPath();
            resArray = jp.query(obj, path);
        } catch (e) {
            getLogger('Parse JSON').error("Error with provided path: "+e.message);
            return;
        }

        if (resArray.length > 0) {
            let outputObj = resArray;
            // unwrap array if there is a single result (legacy spec)
            if (resArray.length === 1) {
                outputObj = resArray[0];
            }
            if (outputObj instanceof Object) {
                setResult(JSON.stringify(outputObj));
            } else {
                setResult(outputObj);
            }
        } else {
            getLogger('Parse JSON').warn("No result found matching provided path");
            setResult(null);
        }
    }
}

registerBrick('0162e331fae562c33ef7', ParseJson);
