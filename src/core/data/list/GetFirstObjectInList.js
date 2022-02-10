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

export default class GetFirstObjectInList extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!Array|!QueryResult} list
     * @param {function(!*)} setObject
     */
    update($, [list], [setObject]) {
        const logger = getLogger('Get First Object In List');

        if(Array.isArray(list)) {
            if (list.length > 0) {
                setObject(list[0]);
            } else {
                logger.warn('OutOfBound: trying to return the first element of an empty array!');
            }
        } else if (list instanceof ListDef) {
            list.observeFirst().subscribe(_object => {
                setObject(_object);
            });
        } else if(list instanceof QueryResult) {
            if (list.size() > 0) {
                setObject(list.getFirst());
            } else {
                logger.warn('OutOfBound: trying to return the first element of an empty QueryResult!');
            }
        } else {
            logger.error('TypeError: The list should be of type ListDef, Array or QueryResult');
        }
    }
}

registerBrick('016324f5c97a5bb2892b', GetFirstObjectInList);
