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

import {Brick, registerBrick, ListDef, transformers, QueryResult} from 'olympe';
import {getLogger} from 'logging';

export default class FilterListRange extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!List} list the list to be filtered
     * @param {!number} startIndex
     * @param {!number} endIndex
     * @param {!function(!ListDef|!Array)} setFiltered
     */
    update($, [list, startIndex, endIndex], [setFiltered]) {
        const logger = getLogger('Filter List Range');
        const count = endIndex - startIndex + 1;
        if (count <= 0) {
            logger.warn('`endIndex` is smaller than `startIndex`, list is not filtered');
            setFiltered(list);
        } else if(Array.isArray(list)) {
            setFiltered(list.slice(startIndex, startIndex+count))
        } else if(list instanceof QueryResult) {
            setFiltered(list.toArray().slice(startIndex, startIndex+count))
        } else if (list instanceof ListDef) {
            setFiltered(list.transform(new transformers.Limit(startIndex, count)));
        } else {
            logger.error('List is not a ListDef, an Array or a QueryResult');
        }
    }
}

registerBrick('01717d5f60be1607fb43', FilterListRange);
