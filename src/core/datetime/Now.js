
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
Provides a data-flow containing the current date & time that will be updated every specified interval.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| interval | Number | The interval, in milliseconds between updates. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| datetime flow | DateTime | The current date & time. |

**/
export default class Now extends Brick {

    /**
     * The label used as key to save the interval id
     *
     * @return {string}
     */
    static get interval() { return 'INTERVAL'; }

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {number} interval
     * @param {function(Date)} setDate
     */
    update(context, [interval], [setDate]) {

        // Clear potential previous timeout
        let intervalID = context.get(Now.interval);
        intervalID && clearTimeout(intervalID);
        context.remove(Now.interval);

        // Set initial value
        setDate(new Date());
        // Create a new timeout function if needed
        if (interval > 0) {
            intervalID = setInterval(() => setDate(new Date()), interval);
            context.set(Now.interval, intervalID);
        }
    }

    /**
     * @override
     */
    destroy(context) {
        const intervalID = context.get(Now.interval);
        intervalID && clearInterval(intervalID);
    }
}

registerBrick('0166edbb9f8ab36de44c', Now);
