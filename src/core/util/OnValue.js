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
This functions triggers the output control-flow every time the value of the input data-flow changes.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Value | Object | The input data-flow. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Value | Object | A replication of the input data-flow. |
| Control Flow | Control Flow | The output control flow. |

**/
export default class OnValue extends FunctionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {*} value
     * @param {function(*)} setValue
     * @param {function(*)} emitEvent
     */
    update(context, [value], [emitEvent, setValue]) {
        // Transfers the value to the output
        setValue(value);

        // Dispatches a new event (control flow)
        emitEvent(Date.now());
    }
}

registerBrick('016682d396a6b4c97363', OnValue);
