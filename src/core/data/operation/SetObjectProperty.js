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

import {FunctionBrick, registerBrick, Transaction, Sync, instanceToTag, DBView, PropertyPrimitive, CreateInstance} from 'olympe';
import {getLogger} from 'logging';
import {castPrimitiveValue} from "../transaction/_helpers";

export default class SetObjectProperty extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} object
     * @param {PropertyDescriptor} property
     * @param {*} value
     * @param {function(InstanceTag)} setObject
     */
    onUpdate(context, [object, property, value], [setObject]) {
        const logger = getLogger('Set Object Property');

        const castedValue = castPrimitiveValue(value);

        // Validate arguments
        if (castedValue instanceof Sync) {
            logger.error('Complex properties are not supported');
            return;
        }
        if (castedValue === undefined || castedValue === null) {
            logger.info('Ignoring null value');
            setObject(object);
            return;
        }

        if (instanceToTag(property) === '') {
            logger.error('No property object specified');
            return;
        }

        const db = DBView.get();

        const objectModel = object instanceof CreateInstance ? object.getModelTag() : db.model(object);

        if (!db.isExtending(objectModel, db.getUniqueRelated(instanceToTag(property), PropertyPrimitive.definingModelRel))) {
            logger.error(`Cannot update property, the property ${db.name(instanceToTag(property))} is not valid for this object (${db.name(objectModel)}).`);
            return;
        }


        // Start isolated local transaction
        const transaction = new Transaction();
        transaction.update(object, property, castedValue);

        // Execute the transaction
        transaction.execute((success) => {
            if (!success) {
                logger.error('Update transaction failed');
            } else {
                // Set the output to the input object
                // it is done inside the TransactionCallback to avoid firing potential following
                // SetObjectProperty too early, which could cause errors in the orchestrator
                setObject(object);
            }
        });
    }
}

registerBrick('016778ac9fcc6032ce1d', SetObjectProperty);
