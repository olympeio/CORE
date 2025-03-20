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
Pauses a control flow for a specified amount of time. This helps creating delayed actions.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| duration | Number | Duration, in seconds. |

**/
export default class Pause extends ActionBrick {

    /**
     * The label used as key to save the timeout id
     *
     * @return {string}
     */
    static get timeout() { return 'TIMEOUT'; }

    /**
     * @override
     */
    destroy(context) {
        const timeout = context.get(Pause.timeout);
        timeout && clearTimeout(timeout);
    }

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {number} duration
     * @param {function()} forwardEvent
     */
    update(context, [duration], [forwardEvent]) {
        const SECOND = 1000;

        // Clear potential previous timeout
        let timeout = context.get(Pause.timeout);
        timeout && clearTimeout(timeout);

        // Create a new timeout function
        timeout = setTimeout(forwardEvent, (duration || 0) * SECOND);
        context.set(Pause.timeout, timeout);
    }
}

registerBrick('0162ce4b6d50ec186157', Pause);
