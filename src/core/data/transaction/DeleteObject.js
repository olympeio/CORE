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

import { ActionBrick, registerBrick, Transaction, DBView, BrickContext, ErrorFlow } from 'olympe';
import { getLogger } from 'logging';

export default class DeleteObject extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!Tag} object
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     */
    update($, [object], [forwardEvent, setErrorFlow]) {
        // Check if we can delete the inboundObject
        if (DBView.get().exist(object)) {
            const transaction = new Transaction();
            transaction.delete(object);
            transaction.execute()
                .then(() => forwardEvent())
                .catch((message) => setErrorFlow(ErrorFlow.create(`Delete Object: ${message}`, 1)));
        } else {
            getLogger('Delete Object').warn('Cannot delete object. The object is not of type CloudObject', object, 'Ignoring the operation...');
            forwardEvent(); // Ignore if the object does not exist in the local database.
        }
    }
}

registerBrick('0166e450adc75a1722c1', DeleteObject);
