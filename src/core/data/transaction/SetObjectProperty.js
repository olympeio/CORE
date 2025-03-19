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
    DBView,
    ErrorFlow,
    registerBrick,
    PropertyModel,
    CloudObject,
    Transaction,
    tagToString,
    BrickContext
} from 'olympe';
import {getLogger} from 'logging';
import {castPrimitiveValue} from "./_helpers";

export default class SetObjectProperty extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Tag} object
     * @param {Property} property
     * @param {*} value
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(Tag)} setObject
     */
    update(context, [object, property, value], [forwardEvent, setErrorFlow, setObject]) {
        const castedValue = castPrimitiveValue(value);
        const returnError = (message, code) => setErrorFlow(ErrorFlow.create(`Set Object Property :${message}`, code));

        // Validate arguments
        if (tagToString(object) === '') {
            returnError('No object input specified', 3);
            return;
        }
        if (tagToString(property) === '') {
            returnError('No property input specified', 2);
            return;
        }
        if (castedValue instanceof CloudObject) {
            returnError('Complex properties are not supported', 1);
            return;
        }
        if (castedValue === undefined || castedValue === null) {
            getLogger('Set Object Property').info('Ignoring null value');
            setObject(object);
            forwardEvent();
            return;
        }

        // Transaction
        const transaction = Transaction.from(context);

        const db = DBView.get();
        const objectModel = typeof object === 'string' ? transaction.model(object) : db.model(object);
        if (!db.isExtending(objectModel, db.getUniqueRelated(tagToString(property), PropertyModel.definingModelRel))) {
            returnError(`Cannot update property, the property ${db.name(tagToString(property))} is not valid for this object (${db.name(objectModel)}).`,3);
            return;
        }

        transaction.update(object, property, castedValue);
        Transaction.process(context, transaction).then(() => {
            setObject(object);
            forwardEvent();
        }).catch(message => returnError(message, 4));

    }
}

registerBrick('01632a7cbe87ca19c5f1', SetObjectProperty);
