
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

/**

**/
export default class Regex extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} text
     * @param {string} regex
     * @param {function(boolean)} setMatched
     * @param {function(Array)} setMatchElements
     */
    update(context, [text, regex], [setMatched, setMatchElements]) {
        const result = new RegExp(regex).exec(text);
        if (result === null) {
            setMatched(false);
            setMatchElements([]);
        } else {
            setMatched(true);
            setMatchElements(result.slice(0,result.length));
        }
    }
}

registerBrick('016cb429d2e316b6478a', Regex);
