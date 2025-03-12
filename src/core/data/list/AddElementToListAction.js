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

import {Brick, registerBrick} from 'olympe';
import {addElementToList} from "./AddElementToListFunction";

export default class AddElementToListAction extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!List} inputList
     * @param {!CloudObject|!Object} object
     * @param {function()} forwardEvent
     * @param {function(!ListDef|!Array)} setList
     */
    update($, [inputList, object], [forwardEvent, setList]) {
        const newList = addElementToList(inputList || [], object);
        if (newList !== undefined) {
            setList(newList);
            forwardEvent();
        }
    }
}

registerBrick('0179c7fea60380c20ff4', AddElementToListAction);
