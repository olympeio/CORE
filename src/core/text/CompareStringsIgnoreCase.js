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
## Description
Returns a number indicating whether the reference string s2 comes before, after, or is equivalent to s1 string in sort order, ignoring the case
Use localeCompare js function. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | s1 | String | The first string |
 | s2 | String | The second string |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| s1.localeCompare(s2) | Number | -1 if s1 < s2, 0 if s1 == s2, 1 if s1 > s2, ignoring case. |
**/
export default class CompareStringsIgnoreCase extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Context} context
     * @param {string} s1
     * @param {string} s2
     * @param {function(number)} setResult
     */
    onUpdate(context, [s1, s2], [setResult]) {
        setResult(String(s1).toLocaleLowerCase().localeCompare(String(s2).toLocaleLowerCase()));
    }
}

registerBrick('01717c91b5f57d8e871b', CompareStringsIgnoreCase);

