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
        if (value === undefined || value === null) {
            logger.info('Ignoring null value');
            setObject(object);
            forwardEvent();
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
