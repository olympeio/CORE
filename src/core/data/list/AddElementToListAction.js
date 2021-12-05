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

import {ActionBrick, instanceToTag, ListDef, registerBrick, Sync} from 'olympe';
import {addElementToList} from "./AddElementToListFunction";

/**
## Description
Adds en element to a list. If no list is provided, it is created.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list in which the element will be added. |
| Object | Object | The element to add. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The result list, with the added element. |
 **/
export default class AddElementToListAction extends ActionBrick {

    /**
     * Executed every time the brick receives a new trigger event.
     * Note that the method will be executed _even if_ an input (list, object) is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {!ListDef|!Array} inputList
     * @param {!Sync|!Object} object
     * @param {function()} forwardEvent
     * @param {function(!ListDef|!Array)} setList
     */
    update(context, [inputList, object], [forwardEvent, setList]) {
        setList(addElementToList(inputList || [], object));
        forwardEvent();
    }
}

registerBrick('0179c7fea60380c20ff4', AddElementToListAction);
