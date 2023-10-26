
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

import { Brick, registerBrick, BrickContext, ErrorFlow } from 'olympe';

export default class CatchErrors extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {ErrorFlow} errorFlow
     * @param {function(number)} forwardEvent
     * @param {function(string)} setMessage
     * @param {function(number)} setCode
     * @param {function(string)} setStack
     */
    update(context, [ errorFlow], [ forwardEvent, setMessage, setCode, setStack ]) {
        setMessage(errorFlow.getMessage());
        setCode(errorFlow.getCode());
        setStack(errorFlow.getStack());
        forwardEvent(Date.now());
    }
}

registerBrick('016eeb5ede9f3094d8f5', CatchErrors);
