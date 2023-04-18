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

import {CloudObject, ActionBrick, registerBrick, Transaction, BrickContext, Relation, RelationModel, ErrorFlow} from 'olympe';

export default class DeleteAllRelations extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Tag} origin
     * @param {Relation} relation
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(Tag)} setOrigin
     */
    update(context, [origin, relation], [forwardEvent, setErrorFlow, setOrigin]) {
        if (!CloudObject.exists(origin) || !CloudObject.exists(relation) || !(CloudObject.get(relation) instanceof RelationModel)) {
            setErrorFlow(ErrorFlow.create('Invalid inputs', 1));
            return;
        }
        // Get current transaction
        const transaction = Transaction.from(context);

        // Delete the specified relations
        // WARNING : it does not propagate the deletion !
        transaction.deleteAllRelations(relation, origin);

        // Release or execute the transaction
        Transaction.process(context, transaction).then(() => {
            setOrigin(origin);
            forwardEvent();
        }).catch((message) => {
            setErrorFlow(ErrorFlow.create(`Delete All Relations: ${message}`, 1));
        });
    }
}

registerBrick('01681979b58936d73d5f', DeleteAllRelations);
