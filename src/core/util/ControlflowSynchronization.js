
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

/**
## Description
Dispatches a control flow whenever one of the two input gets triggered, after they both have been triggered at least once.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Control flow 1 | ControlFlow | First input flow. |
| Control flow 1 | ControlFlow | Second input flow. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Output flow | ControlFlow | Synchronized out put flow. |
**/
export default class ControlflowSynchronization extends Brick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} incomingEvent_1
     * @param {number} incomingEvent_2
     * @param {function(number)} forwardEvent
     */
    update(context, [incomingEvent_1, incomingEvent_2], [forwardEvent]) {
        forwardEvent(Date.now());
    }
}

registerBrick('016bd5eed74159ea8218', ControlflowSynchronization);
