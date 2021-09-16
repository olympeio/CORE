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

import {
    ActionBrick,
    DBView,
    ErrorFlow,
    registerBrick,
    PropertyPrimitive,
    Sync,
    instanceToTag,
    CreateInstance
} from 'olympe';
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
     * @param {function(ErrorFlow)} setErrorFlow
     */
    onUpdate(context, [object, property, value], [forwardEvent, setObject, setErrorFlow]) {
        const logger = getLogger('Set Object Property');

        const returnError = (message, code) => {
            logger.error(message);
            setErrorFlow(ErrorFlow.create(message, code));
        };

        // Validate arguments
        if (value instanceof Sync) {
            returnError('Complex properties are not supported', 1);
            return;
        }
        if (value === undefined || value === null) {
            logger.info('Ignoring null value');
            setObject(object);
            forwardEvent();
            return;
        }

        if (instanceToTag(property) === '') {
            returnError('No property object specified', 2);
            return;
        }

        const db = DBView.get();
        const objectModel = object instanceof CreateInstance ? object.getModelTag() : db.model(object);
        if (!db.isExtending(objectModel, db.getUniqueRelated(instanceToTag(property), PropertyPrimitive.definingModelRel))) {
            returnError(`Cannot update property, the property ${db.name(instanceToTag(property))} is not valid for this object (${db.name(objectModel)}).`,3);
            return;
        }

        // Transaction
        const transaction = context.getTransaction();

        transaction.update(object, property, value);

        context.releaseTransaction((executed, success, message) => {
            if (!success) {
                returnError(`Transaction error: ${message}`, 4);
            }
            setObject(object);
            forwardEvent();
        });
    }
}

registerBrick('01632a7cbe87ca19c5f1', SetObjectProperty);
