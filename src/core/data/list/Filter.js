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

export default class Filter extends ActionBrick {

    /**
     * @protected
     * @param {!Context} brickContext
     * @param {!ListDef | !Array} list
     * @param {!FunctionBrick} predicate
     * @param {!function()} forwardEvent
     * @param {!*} setList
     */
    onUpdate(brickContext, [list, predicate], [forwardEvent, setList]) {
        if (!list || !predicate) {
            getLogger('Filter').warn('Nothing to do: list or predicate is null or undefined.');
            forwardEvent();
            return;
        }

        if (!Array.isArray(list) && !(list instanceof ListDef)) {
            getLogger('Filter').error('The provided list is neither an array nor a listdef');
            return;
        }

        const array = Array.isArray(list) ? list : [];
        if (list instanceof ListDef) {
            list.forEachCurrentValue((item) => array.push(item));
        }

        this.process(brickContext, array, predicate).then((outputList) => {
            setList(outputList);
            forwardEvent();
        });
    }

    /**
     * @private
     * @param {Context} brickContext
     * @param {!Array} array
     * @param {FunctionBrick} predicate
     * @return {Promise<!Array>}
     */
    async process(brickContext, array, predicate) {
        const [startInput, itemInput, rankInput, listInput] = predicate.getInputs();
        const [endOutput, resOutput] = predicate.getOutputs();

        const filter = (item, rank, arr) => new Promise((done) => {
            const predicateCtx = brickContext.createChild('predicate');
            predicate.run(predicateCtx);
            predicateCtx.set(itemInput, item);
            predicateCtx.set(rankInput, rank);
            predicateCtx.set(listInput, arr);
            predicateCtx.set(startInput, Date.now()); // Trigger the control flow
            predicateCtx.observe(endOutput).subscribe(() => {
                const result = predicateCtx.get(resOutput);
                predicateCtx.destroy(); // Destroy the context
                done(result); // Return the new processed item
            });
        });

        const resultList = [];
        for (let i = 0, l = array.length; i < l; i++) {
            if (Boolean(await filter(array[i], i, array))) {
                resultList.push(array[i]);
            }
        }
        return resultList;
    }
}

registerBrick('017cbcf45dbd504928a2', Filter);
