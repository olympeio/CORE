/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
