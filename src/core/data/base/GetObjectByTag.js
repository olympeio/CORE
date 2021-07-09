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

/**
## Description
Retrieve an object given its tag.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Tag | String | The tag of the requested object. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | Object | The Object. |
**/
export default class GetObjectByTag extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} tag
     * @param {function(!Sync)} setObject
     */
    onUpdate(context, [tag], [setObject]) {
        new ListDef(tag, []).observeFirst().subscribe(setObject);
    }
}

registerBrick('016324f5cf507031f6a3', GetObjectByTag);
