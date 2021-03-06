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

import {ActionBrick, registerBrick, CloudObject, instanceToTag, Transaction} from 'olympe';
import {getLogger} from 'logging';
export default class CreateLocalObject extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!CloudObject} model
     * @param {function()} forwardEvent
     * @param {function(!CloudObject)} setObject
     */
    update(context, [model], [forwardEvent, setObject]) {
        const logger = getLogger('Create Local Object');

        // Guards
        if (!instanceToTag(model)) {
            logger.warn('no model specified');
            return;
        }

        // Transaction
        const transaction = Transaction.from(context);
        const instance = transaction.create(model)
        transaction.persistInstance(instance, false);
        Transaction.process(context, transaction)
            .then(executed => setObject(executed ? CloudObject.get(instance) : instance))
            .catch(message => logger.error(`transaction error: ${message}`))
            .finally(forwardEvent);
    }
}

registerBrick('0162f2e963b6c9ed85b7', CreateLocalObject);
