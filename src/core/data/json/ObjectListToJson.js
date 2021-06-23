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

import { registerBrick, DBView, ListDef } from 'olympe';
import ObjectToJson from "./ObjectToJson";

/**
## Description
Parses a list of object into a json.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | List | A list of instances of a BusinessModel. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | String | stringified Json |

**/
export default class ObjectListToJson extends ObjectToJson {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list
     * @param {function(string)} setJson
     * @param {function()} forwardEvent
     */
    onUpdate(context, [list], [forwardEvent, setJson]) {
        const db = DBView.get();
        const json = [];

        if (list instanceof ListDef) {
            list.forEachCurrentValue((item) => {
                json.push(this.parseProperties(db, item));
            });
        } else {
            list.forEach((item) => {
                json.push(this.parseProperties(db, item));
            });
        }

        setJson(JSON.stringify(json));
        forwardEvent();
    }
}

registerBrick('0175b6513d6d8f1e484e', ObjectListToJson);
