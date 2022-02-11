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

export default class Reduce extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!List} list
     * @param {*|undefined} initialValue
     * @param {!Brick} reducer
     * @param {!function()} forwardEvent
     * @param {function(*)} setResult
     */
    update($, [list, reducer, initialValue], [forwardEvent, setResult]) {
        if (!list || !reducer) {
            getLogger('Reduce').warn('Nothing to do: list or reducer is null or undefined.');
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
            getLogger('Reduce').error('The provided list must be of type ListDef, Array or QueryResult');
            return;
        }

        this.process($, array, reducer).then((result) => {
            setResult(result);
            forwardEvent();
        });
    }

    /**
     * @private
     * @param {!BrickContext} $
     * @param {!Array} array
     * @param {!Brick} reducer
     * @param {*|undefined} initialValue
     * @return {Promise<*>}
     */
    async process($, array, reducer, initialValue) {
        const [startInput, accumulatorInput, itemInput, rankInput, listInput] = reducer.getInputs();
        const [endOutput, resultOutput] = reducer.getOutputs();

        const reduce = (acc, item, rank, arr) => new Promise((done) => {
            const reducer$ = $.runner(reducer)
                .set(accumulatorInput, acc)
                .set(itemInput, item)
                .set(rankInput, rank)
                .set(listInput, arr)
                .trigger(startInput)
                .waitFor(endOutput)
                .then(() => done(reducer$.get(resultOutput)));
        });

        let accumulator = initialValue;
        for (let i = 0, l = array.length; i < l; i++) {
            accumulator = await reduce(accumulator, array[i], i, array);
        }
        return accumulator;
    }
}

registerBrick('017cbcf4ca0f68e43d91', Reduce);
