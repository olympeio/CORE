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

export default class ContinuousForEach extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!List} list
     * @param {!Brick} iterator
     * @param {!Array} _
     */
    update($, [list, iterator], _) {
        const [itemInput, rankInput, listInput] = iterator.getInputs();

        if (list instanceof ListDef) {
            list.forEach((item, key) => {
                const iterator$ = $.runner(iterator)
                    .set(itemInput, item)
                    .set(listInput, list);
                list.observeRank(key).subscribe(rank => iterator$.set(rankInput, rank));
            });
        } else if (Array.isArray(list) || list instanceof QueryResult) {
            list.forEach((item, rank, array) => {
                $.runner(iterator)
                    .set(itemInput, item)
                    .set(rankInput, rank)
                    .set(listInput, array);
            });
        } else {
            getLogger('Continuous For Each').error('The provided list must be of type ListDef, Array or QueryResult');
        }
    }
}

registerBrick('017c9e0503c008f8ea74', ContinuousForEach);
