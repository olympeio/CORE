/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
