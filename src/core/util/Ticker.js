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
Triggers the output control-flow at every specified interval.
It is also controlled by an on/off switch.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Interval | Number | The interval in milliseconds. |
| On/Off | Boolean | `true` to activate the ticker, `false` to turn it off. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Control Flow | Control Flow | The output control-flow. |
**/
export default class Ticker extends FunctionBrick {

    /**
     * The label used as key to save the interval id
     *
     * @return {string}
     */
    static get interval() { return 'INTERVAL'; }

    /**
     * @protected
     * @param {!Context} context
     * @param {number} interval
     * @param {boolean} onOff
     * @param {function(number)} triggerEvent
     */
    onUpdate(context, [interval, onOff], [triggerEvent]) {
        // Clear potential previous timeout
        let intervalID = context.get(Ticker.interval);
        intervalID && clearInterval(intervalID);

        if (onOff) {
            intervalID = setInterval(() => triggerEvent(Date.now()), interval);
            context.set(Ticker.interval, intervalID);
        }
    }

    /**
     * @override
     */
    onDestroy(context) {
        const intervalID = context.get(Ticker.interval);
        intervalID && clearInterval(intervalID);
    }
}

registerBrick('01632af2ee63ea368184', Ticker);
