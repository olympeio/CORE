
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

import {Brick, registerBrick, ListDef, QueryResult} from 'olympe';
import {getLogger} from 'logging';

export default class ListForEachEntries extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!List} list
     * @param {function(!*)} setObject
     */
    update($, [list], [setObject]) {
        if(Array.isArray(list) || list instanceof ListDef || list instanceof QueryResult) {
            list.forEach(object => setObject(object));
        } else {
            getLogger('List For Each Entries').error('TypeError: The list should be of type ListDef, Array or QueryResult');
        }
    }
}

registerBrick('01718897a585de88f500', ListForEachEntries);
