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

export default class Filter extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!List} list
     * @param {!Brick} predicate
     * @param {!function()} forwardEvent
     * @param {function(!Array)} setList
     */
    update($, [list, predicate], [forwardEvent, setList]) {
        if (!list || !predicate) {
            getLogger('Filter').warn('Nothing to do: list or predicate is null or undefined.');
            forwardEvent();
            return;
        }

        let array = [];
        if(Array.isArray(list)) {
            array = list;
        } else if(list instanceof QueryResult) {
            array = list.toArray();
        } else if(list instanceof ListDef) {
            list.forEachCurrentValue(item => array.push(item));
        } else {
            getLogger('Filter').error('The provided list must be of type ListDef, Array or QueryResult');
            return;
        }

        this.process($, array, predicate).then((outputList) => {
            setList(outputList);
            forwardEvent();
        }).catch((error) => $.throw(error));
    }

    /**
     * @private
     * @param {!BrickContext} $
     * @param {!Array} array
     * @param {!Brick} predicate
     * @return {Promise<!Array>}
     */
    async process($, array, predicate) {
        const [startInput, itemInput, rankInput, listInput] = predicate.getInputs();
        const [endOutput, resOutput] = predicate.getOutputs();

        const filter = async (item, rank, arr) => {
            const predicate$ = $.runner(predicate)
                .set(itemInput, item)
                .set(rankInput, rank)
                .set(listInput, arr)
                .trigger(startInput);

            await predicate$.waitFor(endOutput); // Wait for the output control flow.
            const result = predicate$.get(resOutput);
            predicate$.destroy();
            return result;
        };

        const filteredArray = [];
        for (let i = 0, l = array.length; i < l; i++) {
            if ($.isDestroyed()) {
                throw new Error('Filter context has been destroyed');
            }
            if (Boolean(await filter(array[i], i, array))) {
                filteredArray.push(array[i]);
            }
        }
        return filteredArray;
    }
}

registerBrick('017cbcf45dbd504928a2', Filter);
