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
    onDestroy(context) {
        const timeout = context.get(Pause.timeout);
        timeout && clearTimeout(timeout);
    }

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} duration
     * @param {function()} forwardEvent
     */
    onUpdate(context, [duration], [forwardEvent]) {
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
