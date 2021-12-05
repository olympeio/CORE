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
    update(context, [list], [forwardEvent, setJson]) {
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
