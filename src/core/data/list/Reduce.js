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
import { ActionBrick, registerBrick, ListDef } from 'olympe';
import {getLogger} from 'logging';

export default class Reduce extends ActionBrick {

    /**
     * @protected
     * @param {!Context} brickContext
     * @param {!ListDef | !Array} list
     * @param {* | undefined} initialValue
     * @param {!FunctionBrick} reducer
     * @param {!function()} forwardEvent
     * @param {!*} setResult
     */
    onUpdate(brickContext, [list, reducer, initialValue], [forwardEvent, setResult]) {
        if (!Array.isArray(list) && !(list instanceof ListDef)) {
            getLogger('For Each').error('The provided list is neither an array nor a listdef');
        }

        const array = Array.isArray(list) ? list : [];
        if (list instanceof ListDef) {
            list.forEachCurrentValue((item) => array.push(item));
        }

        this.process(brickContext, array, reducer, initialValue).then((result) => {
            setResult(result);
            forwardEvent();
        });
    }

    /**
     * @private
     * @param {Context} brickContext
     * @param {!Array} array
     * @param {FunctionBrick} reducer
     * @param {* | undefined} initialValue
     * @return {Promise<*>}
     */
    async process(brickContext, array, reducer, initialValue) {
        const [startInput, accumulatorInput, itemInput, rankInput, listInput] = reducer.getInputs();
        const [endOutput, resultOutput] = reducer.getOutputs();

        const reduce = (acc, item, rank, arr) => new Promise((done) => {
            const reducerCtx = brickContext.createChild('reducer');
            reducer.run(reducerCtx);
            reducerCtx.set(accumulatorInput, acc);
            reducerCtx.set(itemInput, item);
            reducerCtx.set(rankInput, rank);
            reducerCtx.set(listInput, arr);
            reducerCtx.set(startInput, Date.now()); // Trigger the control flow
            reducerCtx.observe(endOutput).subscribe(() => {
                const reducedValue = reducerCtx.get(resultOutput);
                reducerCtx.destroy(); // Destroy the context
                done(reducedValue); // Return the new reduced value
            });
        });

        let accumulator = initialValue;
        for (let i = 0, l = array.length; i < l; i++) {
            accumulator = await reduce(accumulator, array[i], i, array);
        }
        return accumulator;
    }
}

registerBrick('017cbcf4ca0f68e43d91', Reduce);
