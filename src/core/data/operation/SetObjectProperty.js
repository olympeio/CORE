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

import {Brick, registerBrick, Transaction, CloudObject, instanceToTag, DBView, PropertyModel} from 'olympe';
import {getLogger} from 'logging';
import {castPrimitiveValue} from "../transaction/_helpers";

export default class SetObjectProperty extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!InstanceTag} object
     * @param {!PropertyDescriptor} property
     * @param {*} value
     * @param {function(!InstanceTag)} setObject
     */
    update($, [object, property, value], [setObject]) {
        const logger = getLogger('Set Object Property');

        const castedValue = castPrimitiveValue(value);

        // Validate arguments
        if (castedValue instanceof CloudObject) {
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

        const objectModel = db.model(object);
        if (!objectModel || !db.isExtending(objectModel, db.getUniqueRelated(instanceToTag(property), PropertyModel.definingModelRel))) {
            logger.error(`Cannot update property, the property ${db.name(instanceToTag(property))} is not valid for this object (${db.name(objectModel)}).`);
            return;
        }

        // Start isolated local transaction
        const transaction = new Transaction();
        transaction.update(object, property, castedValue);

        // Execute the transaction
        // Set the output to the input object
        // it is done inside the TransactionCallback to avoid firing potential following
        // SetObjectProperty too early, which could cause errors in the orchestrator
        transaction.execute()
            .then(() => setObject(object))
            .catch(() => logger.error('Update transaction failed'));
    }
}

registerBrick('016778ac9fcc6032ce1d', SetObjectProperty);
