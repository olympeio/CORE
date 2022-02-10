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

export default class MapBrick extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!Array|!QueryResult} list
     * @param {!Brick} mapper
     * @param {!function()} forwardEvent
     * @param {function(!Array)} setList
     */
    update($, [list, mapper], [forwardEvent, setList]) {
        if (!list || !mapper) {
            getLogger('Map').warn('Nothing to do: list or mapper is null or undefined.');
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
            getLogger('Map').error('The provided list must be of type ListDef, Array or QueryResult');
            return;
        }

        const [startInput, itemInput, rankInput, listInput] = iterator.getInputs();
        const [_, itemOutput] = iterator.getOutputs();
        Promise.all(array.map((item, rank) => {
            return $.runner(mapper)
                .set(itemInput, item)
                .set(rankInput, rank)
                .set(listInput, array)
                .trigger(startInput)
                .waitFor(itemOutput);
        })).then(mappedArray => {
            setList(mappedArray);
            forwardEvent();
        });
    }
}

registerBrick('017cbcf3e6a262751981', MapBrick);
