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
    Brick,
    registerBrick,
    Transaction,
    CloudObject,
    tagToString,
    DBView,
    PropertyModel,
} from 'olympe';
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
        if (tagToString(object) === '') {
            throw new Error('No object input specified');
        }
        if (tagToString(property) === '') {
            throw new Error('No property input specified');
        }
        if (castedValue instanceof CloudObject) {
            throw new Error('Complex properties are not supported');
        }
        if (castedValue === undefined || castedValue === null) {
            logger.info('Ignoring null value');
            setObject(object);
            return;
        }

        const db = DBView.get();
        const objectModel = typeof object === 'string' ? transaction.model(object) : db.model(object);
        if (!db.isExtending(objectModel, db.getUniqueRelated(tagToString(property), PropertyModel.definingModelRel))) {
            throw new Error(`Cannot update property, the property ${db.name(tagToString(property))} is not valid for this object (${db.name(objectModel)}).`);
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
