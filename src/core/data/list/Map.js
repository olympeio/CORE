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

export default class MapBrick extends ActionBrick {

    /**
     * @protected
     * @param {!Context} brickContext
     * @param {!ListDef | !Array} list
     * @param {!FunctionBrick} mapper
     * @param {!function()} forwardEvent
     * @param {!*} setList
     */
    onUpdate(brickContext, [list, mapper], [forwardEvent, setList]) {
        if (!list || !mapper) {
            getLogger('Map').warn('Nothing to do: list or map function is null or undefined.');
            forwardEvent();
            return;
        }

        if (!Array.isArray(list) && !(list instanceof ListDef)) {
            getLogger('Map').error('The provided list is neither an array nor a listdef');
            return;
        }

        const array = Array.isArray(list) ? list : [];
        if (list instanceof ListDef) {
            list.forEachCurrentValue((item) => array.push(item));
        }

        this.process(brickContext, array, mapper).then((outputList) => {
            setList(outputList);
            forwardEvent();
        });
    }

    /**
     * @private
     * @param {Context} brickContext
     * @param {!Array} array
     * @param {FunctionBrick} mapper
     * @return {Promise<!Array>}
     */
    async process(brickContext, array, mapper) {
        const [startInput, itemInput, rankInput, listInput] = mapper.getInputs();
        const [endOutput, itemOutput] = mapper.getOutputs();

        const map = (item, rank, arr) => new Promise((done) => {
            const mapperCtx = brickContext.createChild('mapper');
            mapper.run(mapperCtx);
            mapperCtx.set(itemInput, item);
            mapperCtx.set(rankInput, rank);
            mapperCtx.set(listInput, arr);
            mapperCtx.set(startInput, Date.now()); // Trigger the control flow
            mapperCtx.observe(endOutput).subscribe(() => {
                const processedItem = mapperCtx.get(itemOutput);
                mapperCtx.destroy(); // Destroy the context
                done(processedItem); // Return the new processed item
            });
        });

        const result = [];
        for (let i = 0, l = array.length; i < l; i++) {
            result.push(await map(array[i], i, array));
        }
        return result;
    }
}

registerBrick('017cbcf3e6a262751981', MapBrick);
