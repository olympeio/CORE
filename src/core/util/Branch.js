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
import {map} from "rxjs/operators";

export default class Branch extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        const [incomingEvent, inputCondition] = this.getInputs();
        return $.observe(incomingEvent)
            // Execute the action only if the control flow has a value, clear the brick when the event is null
            .pipe(map((event) => event === null ? null : Boolean($.get(inputCondition))));
    }

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {boolean} condition
     * @param {function(number)} trueDispatcher
     * @param {function(number)} falseDispatcher
     */
    update(context, [condition], [trueDispatcher, falseDispatcher]) {
        condition ? trueDispatcher(Date.now()) : falseDispatcher(Date.now());
    }
}

registerBrick('01633fd9f28ce400a0a1', Branch);
