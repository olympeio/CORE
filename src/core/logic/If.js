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
import { FunctionBrick, registerBrick } from 'olympe';
import {merge} from "rxjs";
import {map} from "rxjs/operators";

export default class If extends FunctionBrick {

    /**
     * @override
     */
    setupExecution($) {
        const inputs = this.getInputs();
        return merge(inputs.map($.observe.bind($))).pipe(map((value) => {
            return value === null ? null : inputs.map((i) => $.get(i));
        }));
    }

    /**
     * @param {!Context} $
     * @param {?boolean} cond
     * @param {*} a
     * @param {*} b
     * @param {function(*)} setResult
     */
    update($, [cond, a, b], [setResult]) {
        if (cond !== null) {
            setResult(cond ? a : b);
        }
    }
}

registerBrick('01633eaa139d1f5e2fc4', If);

