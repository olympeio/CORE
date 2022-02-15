
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

import { Brick, registerBrick, Context, ErrorFlow } from 'olympe';

/**
 ## Description
 Catching an error from an error-flow allows you to access its details and trigger a control-flow every time an
 error is thrown.

 ## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | Error Flow | Error Flow | The error flow from which to catch errors. |
 ## Outputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | Message | String | The error message. |
 | Code | Number | The error code. |
 | Control Flow | Control FLow | The output control flow. |

 **/
export default class CatchErrors extends Brick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {ErrorFlow} errorFlow
     * @param {function(number)} forwardEvent
     * @param {function(string)} setMessage
     * @param {function(number)} setCode
     */
    update(context, [ errorFlow], [ forwardEvent, setMessage, setCode ]) {
        setMessage(errorFlow.getMessage());
        setCode(errorFlow.getCode());
        forwardEvent(Date.now());
    }
}

registerBrick('016eeb5ede9f3094d8f5', CatchErrors);
