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
import { FunctionBrick, registerBrick, ListDef } from 'olympe';
import {getLogger} from 'logging';

export default class ForEach extends FunctionBrick {

    /**
     * @protected
     * @param {!Context} brickContext
     * @param {!ListDef} list
     * @param {!FunctionBrick} iterator
     * @param {!Array} outputs
     */
    onUpdate(brickContext, [list, iterator], outputs) {
        const [itemInput, rankInput, listInput] = iterator.getInputs();

        if (list instanceof ListDef) {
            list.forEach((item, key) => {
                const iteratorCtx = brickContext.createChild('iterator');
                iteratorCtx.set(itemInput, item);
                list.observeRank(key).subscribe((r) => iteratorCtx.set(rankInput, r));
                iteratorCtx.set(listInput, list);
                iterator.run(iteratorCtx);
            });
        } else if (Array.isArray(list)) {
            list.forEach((item , rank, array) => {
                const iteratorCtx = brickContext.createChild('iterator');
                iteratorCtx.set(itemInput, item);
                iteratorCtx.set(rankInput, rank);
                iteratorCtx.set(listInput, array);
                iterator.run(iteratorCtx);
            });
        } else {
            getLogger('For Each').error('The provided list is neither an array nor a listdef');
        }
    }
}

registerBrick('017c9e0503c008f8ea74', ForEach);
