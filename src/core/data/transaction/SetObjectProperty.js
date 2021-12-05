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
import {castPrimitiveValue} from "./_helpers";

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
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(InstanceTag)} setObject
     */
    update(context, [object, property, value], [forwardEvent, setErrorFlow, setObject]) {
        const logger = getLogger('Set Object Property');

        const castedValue = castPrimitiveValue(value);

        const returnError = (message, code) => {
            logger.error(message);
            setErrorFlow(ErrorFlow.create(message, code));
        };

        // Validate arguments
        if (castedValue instanceof Sync) {
            returnError('Complex properties are not supported', 1);
            return;
        }
        if (castedValue === undefined || castedValue === null) {
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

        transaction.update(object, property, castedValue);

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
