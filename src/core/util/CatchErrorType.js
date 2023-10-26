
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

export default class CatchErrorType extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {ErrorFlow} errorFlow
     * @param {number} code
     * @param {function(number)} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(string)} setMessage
     * @param {function(string)} setStack
     */
    update(context, [errorFlow, code], [forwardEvent, setErrorFlow, setMessage, setStack]) {
        if (code === errorFlow.getCode()) {
            setMessage(errorFlow.getMessage());
            setStack(errorFlow.getStack());
            forwardEvent(Date.now());
        } else {
            setErrorFlow(errorFlow);
        }
    }
}

registerBrick('016eeb5ede9f3094d900', CatchErrorType);
