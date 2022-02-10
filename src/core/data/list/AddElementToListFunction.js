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

import {Brick, registerBrick, ListDef, CloudObject, instanceToTag, QueryResult} from 'olympe';
import {getLogger} from 'logging';

/**
 *
 * @param {!ListDef|!Array|!QueryResult} list
 * @param {!CloudObject|!Object} object
 * @return {!ListDef|!Array|undefined}
 */
export const addElementToList = (list, object) => {
    const logger = getLogger('Add Element To List');

    // Guards
    if (!Array.isArray(list) && !(list instanceof ListDef) && !(list instanceof QueryResult)) {
        logger.error('TypeError: the list should be of type ListDef, Array or QueryResult');
        return;
    }
    if (list instanceof ListDef && !(object instanceof CloudObject)) {
        logger.error('TypeError: only a CloudObject can be added to a ListDef');
        return;
    }

    // Addition
    if (Array.isArray(list)) {
        const newList = Array.from(list); // Generate shallow copy of the array
        newList.push(object);
        return newList;
    } else if(list instanceof QueryResult) {
        return list.push(object);
    } else {
        return list.union(new ListDef(instanceToTag(object), [])); // New listdef: union of the previous + 1 instance.
    }
};

export default class AddElementToListFunction extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!Array|!QueryResult} list
     * @param {!CloudObject|!Object} object
     * @param {function(!ListDef|!Array)} setList
     */
     update($, [list, object], [setList]) {
        const newList = addElementToList(list || [], object);
        if (newList !== undefined) {
            setList(newList);
        }
    }
}

registerBrick('0179c7aee952dc922de1', AddElementToListFunction);
