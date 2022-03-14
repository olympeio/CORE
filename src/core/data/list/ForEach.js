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
import { ActionBrick, registerBrick, ListDef, QueryResult } from 'olympe';
import { getLogger } from 'logging';

export default class ForEach extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!List} list
     * @param {!Brick} iterator
     * @param {!function()} forwardEvent
     */
    update($, [list, iterator], [forwardEvent]) {
        if (!list || !iterator) {
            getLogger('For Each').warn('Nothing to do: list or iterator is null or undefined.');
            forwardEvent();
            return;
        }

        let array = [];
        if(Array.isArray(list)) {
            array = list;
        } else if(list instanceof QueryResult) {
            array = list.toArray();
        } else if (list instanceof ListDef) {
            list.forEachCurrentValue(item => array.push(item));
        } else {
            getLogger('For Each').error('The provided list must be of type ListDef, Array or QueryResult');
            return;
        }

        const [startInput, itemInput, rankInput, listInput] = iterator.getInputs();
        const [endOutput] = iterator.getOutputs();
        Promise.all(array.map((item, rank) => {
            return $.runner(iterator)
                .set(itemInput, item)
                .set(rankInput, rank)
                .set(listInput, array)
                .trigger(startInput)
                .waitFor(endOutput);
        })).then(forwardEvent);
    }
}

registerBrick('017cbcf45a5b7c4fb9a8', ForEach);
