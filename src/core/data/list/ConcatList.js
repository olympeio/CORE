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

import { Brick, registerBrick, ListDef, QueryResult } from 'olympe';
import { getLogger } from 'logging';

export default class ConcatList extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!List} list1
     * @param {!ListDef|!List} list2
     * @param {function(!ListDef|!List)} setConcatenatedList
     */
    update($, [list1, list2], [setConcatenatedList]) {
        const logger = getLogger('Concat List');

        // Guards
        if(!Array.isArray(list1) && !(list1 instanceof ListDef) && !(list1 instanceof QueryResult)) {
            logger.error('TypeError: the list1 should be of type ListDef, Array or QueryResult');
            return;
        }
        if(!Array.isArray(list2) && !(list2 instanceof ListDef) && !(list2 instanceof QueryResult)) {
            logger.error('TypeError: the list2 should be of type ListDef, Array or QueryResult');
            return;
        }

        if(Array.isArray(list1) && Array.isArray(list2)) {
            setConcatenatedList(list1.concat(list2));
        } else if(list1 instanceof ListDef && list2 instanceof ListDef) {
            setConcatenatedList(list1.union(list2));
        } else if(list1 instanceof QueryResult && list2 instanceof QueryResult) {
            setConcatenatedList(list1.concat(list2));
        } else {
            logger.error('TypeError: both list should be of the same type (ListDef, Array or QueryResult)');
        }
    }
}

registerBrick('01717d5fbc55ea0d361b', ConcatList);
