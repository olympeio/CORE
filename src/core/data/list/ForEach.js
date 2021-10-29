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

export default class ForEach extends ActionBrick {

    /**
     * @protected
     * @param {!Context} brickContext
     * @param {!ListDef | !Array} list
     * @param {!FunctionBrick} iterator
     * @param {!function()} forwardEvent
     */
    onUpdate(brickContext, [list, iterator], [forwardEvent]) {
        if (!list || !iterator) {
            getLogger('For Each').warn('Nothing to do: list or iterator is null or undefined.');
            forwardEvent();
            return;
        }

        if (!Array.isArray(list) && !(list instanceof ListDef)) {
            getLogger('For Each').error('The provided list is neither an array nor a listdef');
            return;
        }

        const array = Array.isArray(list) ? list : [];
        if (list instanceof ListDef) {
            list.forEachCurrentValue((item) => array.push(item));
        }

        this.process(brickContext, array, iterator).then(forwardEvent);
    }

    /**
     * @private
     * @param {Context} brickContext
     * @param {!Array} array
     * @param {FunctionBrick} iterator
     * @return {Promise<void>}
     */
    async process(brickContext, array, iterator) {
        const [startInput, itemInput, rankInput, listInput] = iterator.getInputs();
        const [endOutput] = iterator.getOutputs();

        const iterate = (item, rank, arr) => new Promise((done) => {
            const iteratorCtx = brickContext.createChild('iterator');
            iterator.run(iteratorCtx);
            iteratorCtx.set(itemInput, item);
            iteratorCtx.set(rankInput, rank);
            iteratorCtx.set(listInput, arr);
            iteratorCtx.set(startInput, Date.now()); // Trigger the control flow
            iteratorCtx.observe(endOutput).subscribe(() => {
                iteratorCtx.destroy(); // Destroy the context
                done();
            });
        });

        for (let i = 0, l = array.length; i < l; i++) {
            await iterate(array[i], i, array);
        }
    }
}

registerBrick('017cbcf45a5b7c4fb9a8', ForEach);
