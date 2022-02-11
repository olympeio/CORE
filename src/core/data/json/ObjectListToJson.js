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

import { ActionBrick, registerBrick, ListDef } from 'olympe';
import ObjectToJson from "./ObjectToJson";

export default class ObjectListToJson extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!List} list
     * @param {function(string)} setJson
     * @param {function()} forwardEvent
     */
    update($, [list], [forwardEvent, setJson]) {
        const json = [];

        // ListDef
        if (list instanceof ListDef) {
            list.forEachCurrentValue((item) => {
                json.push(ObjectToJson.parseProperties(item));
            });
        }

        // Array or QueryResult
        else {
            list.forEach((item) => {
                json.push(ObjectToJson.parseProperties(item));
            });
        }

        setJson(JSON.stringify(json));
        forwardEvent();
    }
}

registerBrick('0175b6513d6d8f1e484e', ObjectListToJson);
