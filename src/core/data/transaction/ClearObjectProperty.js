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

import {ActionBrick, registerBrick} from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Clear a specific property of an object.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The object. |
| property | Property | The property to clear. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The result object. |

**/
export default class ClearObjectProperty extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} object
     * @param {PropertyDescriptor} property
     * @param {function()} forwardEvent
     * @param {function(InstanceTag)} setObject
     */
    onUpdate(context, [object, property], [forwardEvent, setObject]) {
        const logger = getLogger('Clear Object Property');

        // Transaction
        const transaction = context.getTransaction();

        transaction.update(object, property, null);

        context.releaseTransaction((executed, success, message) => {
            if (!success) {
                logger.error(`Transaction error: ${message}`);
            }
            setObject(object);
            forwardEvent();
        });
    }
}

registerBrick('017a382f3df9e2dcb12a', ClearObjectProperty);
