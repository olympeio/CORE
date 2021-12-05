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

export default class SubString extends FunctionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {string} s
     * @param {number} start
     * @param {number} end
     * @param {function(string)} setResult
     */
    update(context, [s, start, end], [setResult]) {
        setResult(end < 0 ? String(s).substring(start) : String(s).substring(start, end));
    }
}

registerBrick('01626c0a49aef13d9bd3', SubString);
