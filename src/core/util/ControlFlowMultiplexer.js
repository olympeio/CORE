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
import { merge } from "rxjs";

export default class ControlFlowMultiplexer extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        return merge(...this.getInputs().map((i) => $.observe(i)));
    }

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {number} incomingEvent
     * @param {function(number)} forwardEvent
     */
    update(context, [incomingEvent], [forwardEvent]) {
        forwardEvent(Date.now());
    }
}

registerBrick('016ab6f2396da4eb386f', ControlFlowMultiplexer);
