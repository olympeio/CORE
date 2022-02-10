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

export default class GetObjectAtInList extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!Array|!QueryResult} list
     * @param {number} rank
     * @param {function(!*)} setObject
     */
    update($, [list, rank], [setObject]) {
        const logger = getLogger('Get Object At In List');
        if (Array.isArray(list)) {
            if (list.length > rank) {
                setObject(list[rank]);
            } else {
                logger.warn(`OutOfBound: trying to return a value outside of the array! (rank=${rank}, arrayLength=${list.length})`);
            }
        } else if (list instanceof ListDef) {
            list.observeAt(rank).subscribe(_object => {
                setObject(_object);
            });
        } else if(list instanceof QueryResult) {
            if (list.size() > rank) {
                setObject(list.getAt(rank));
            } else {
                logger.warn(`OutOfBound: trying to return a value outside of the QueryResult! (rank=${rank}, QueryResult.size=${list.size()})`);
            }
        } else {
            logger.error('TypeError: The list should be of type ListDef, Array or QueryResult');
        }
    }
}

registerBrick('016657e42a28d418fcbd', GetObjectAtInList);
