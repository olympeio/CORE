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

import { ActionBrick, registerBrick, CreateInstance, UpdateInstance, Transaction } from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Deletes an object from the server's database.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The object to delete. |

**/
export default class DeleteObject extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!(CreateInstance | UpdateInstance | InstanceTag)} inboundObject
     * @param {function()} forwardEvent
     */
    onUpdate(context, [inboundObject], [forwardEvent]) {
        const logger = getLogger('Delete Object');

        // Check if we can delete the inboundObject
        if (typeof inboundObject === 'string' ||
            inboundObject instanceof CreateInstance ||
            inboundObject instanceof UpdateInstance ||
            typeof inboundObject['getTag'] === 'function') {

            const transaction = new Transaction();

            transaction.delete(inboundObject);
            transaction.execute( (success, message) => {
                if (success) {
                    forwardEvent();
                } else {
                    logger.error(`Cannot delete object : ${message}`);
                }
            })
        } else {
            logger.error('Cannot delete object. The object is not of type Sync, CreateInstance or UpdateInstance', inboundObject )
        }
    }
}

registerBrick('0166e450adc75a1722c1', DeleteObject);
