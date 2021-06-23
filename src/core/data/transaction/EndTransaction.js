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

import { ActionBrick, registerBrick, ErrorFlow } from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Marks the end of a series of transaction operations. The transaction is then executed.
## Errors
| Code | Description |
| --- | --- |
| 1 | The transaction was rejected. |
**/
export default class EndTransaction extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} _
     * @param {function()} forwardEvent
     * @param {function(!ErrorFlow)} dispatchError
     */
    onUpdate(context, _, [forwardEvent, dispatchError]) {
        // Extract the current transaction from the context.
        const transaction = context.getParent().popTransaction();
        if (transaction === null) {
            getLogger('End Transaction').warn('End Transaction: no transaction begun');
            return;
        }

        transaction.execute((success, message) => {
            if (!success) {
                dispatchError(ErrorFlow.create(message || '', 1));
            } else {
                forwardEvent();
            }
        });
    }
}


registerBrick('0162f2ed1d1ba6349600', EndTransaction);
