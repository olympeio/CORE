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

import {FunctionBrick, registerBrick, ListDef, Sync, instanceToTag} from 'olympe';
import {getLogger} from 'logging';

/**
 *
 * @param {!ListDef|!Array} list
 * @param {!Sync|!Object} object
 * @return {!ListDef|!Array|undefined}
 */
export const addElementToList = (list, object) => {
    const logger = getLogger('Add Element To List');

    // Guards
    if (!Array.isArray(list) && !(list instanceof ListDef)) {
        logger.error('TypeError: the list should be of type ListDef or Array');
        return;
    }
    if (list instanceof ListDef && !(object instanceof Sync)) {
        logger.error('TypeError: only a Sync can be added to a ListDef');
        return;
    }

    // Addition
    if (Array.isArray(list)) {
        const newList = Array.from(list); // Generate shallow copy of the array
        newList.push(object);
        return newList;
    } else {
        return  list.union(new ListDef(instanceToTag(object), [])); // New listdef: union of the previous + 1 instance.
    }
};

/**
## Description
Adds en element to a list.
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
export default class AddElementToListFunction extends FunctionBrick {

    /**
     * Executed every time an input (list, object) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {!ListDef|!Array} list
     * @param {!Sync|!Object} object
     * @param {function(!ListDef|!Array)} setList
     */
     update(context, [list, object], [setList]) {
        const newList = addElementToList(list || [], object);
        if (newList !== undefined) {
            setList(newList);
        }
    }
}

registerBrick('0179c7aee952dc922de1', AddElementToListFunction);
