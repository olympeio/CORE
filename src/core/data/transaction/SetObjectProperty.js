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

import {ActionBrick, registerBrick, Sync} from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Assigns a value to a specific property of an object.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The object. |
| property | Property | The property. |
| value | Object | The value. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The Object. |

**/
export default class SetObjectProperty extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} object
     * @param {PropertyDescriptor} property
     * @param {*} value
     * @param {function()} forwardEvent
     * @param {function(InstanceTag)} setObject
     */
    onUpdate(context, [object, property, value], [forwardEvent, setObject]) {
        const logger = getLogger('Set Object Property');

        // Validate arguments
        if (value instanceof Sync) {
            logger.error('Complex properties are not supported');
            return;
        }

        // Transaction
        const transaction = context.getTransaction();

        transaction.update(object, property, value);

        context.releaseTransaction((executed, success, message) => {
            if (!success) {
                logger.error(`Transaction error: ${message}`);
            }
            setObject(object);
            forwardEvent();
        });
    }
}

registerBrick('01632a7cbe87ca19c5f1', SetObjectProperty);
