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

import { ActionBrick, registerBrick } from 'olympe';

/**
## Description
Create an empty JavaScript Array.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The created list. |
**/
export default class CreateList extends ActionBrick {

    /**
     * Executed every time the brick receives a new trigger event.
     * Note that the method will be executed _even if_ an input () is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {!Array} _
     * @param {function()} forwardEvent
     * @param {function(Array)} setList
     */
    update(context, _, [forwardEvent, setList]) {
        setList([]);
        forwardEvent();
    }
}

registerBrick('017a1e1270d9a8e557a9', CreateList);
