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
import { Brick, registerBrick } from 'olympe';
import { merge } from "rxjs";
import { map } from "rxjs/operators";

export default class SubString2 extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        const inputs = this.getInputs();
        return merge(...inputs.map((i) => $.observe(i))).pipe(map(() => {
            const [string, start, end] = inputs.map((i) => $.get(i));
            if (string === null || start === null) {
                return null;
            }
            return [string, start, end];
        }));
    }

    /**
     * @protected
     * @param {!Context} context
     * @param {string} s
     * @param {number} start
     * @param {number} end
     * @param {function(string)} setResult
     */
    update(context, [s, start, end], [setResult]) {
        setResult(String(s).substring(start, end));
    }
}

registerBrick('0184add7d0869c4366f7', SubString2);
