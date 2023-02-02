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
    registerBrick,
    ErrorFlow,
    DBView,
    RelationModel,
    Transaction,
    File as OFile,
    tagToString
} from 'olympe';
import {getLogger} from 'logging';
export default class CreateRelation extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!Tag} origin
     * @param {!Relation} relation
     * @param {!Tag} destination
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(!Tag)} setOrigin
     * @param {function(!Tag)} setDestination
     */
    update(context, [origin, relation, destination], [forwardEvent, setErrorFlow, setOrigin, setDestination]) {
        const logger = getLogger('Create Relation');
        const relationTag = tagToString(relation);

        const returnError = (message, code) => {
            logger.error(message);
            setErrorFlow(ErrorFlow.create(message, code));
        };

        // Guards
        if (!Boolean(origin) || !Boolean(destination)) {
            !Boolean(origin) && logger.info('Ignoring null value for origin object');
            setOrigin(origin);
            !Boolean(destination) && logger.info('Ignoring null value for destination object');
            setDestination(destination);
            forwardEvent();
            return;
        }
        if (relationTag === '') {
            returnError('No relation specified',1);
            return;
        }

        const transaction = Transaction.from(context);

        const db = DBView.get();
        const originModel = transaction.model(origin);
        const destinationModel = transaction.model(destination);
        const relOriginModel = db.getUniqueRelated(relationTag, RelationModel.originModelRel);
        const relDestModel = db.getUniqueRelated(relationTag, RelationModel.destinationModelRel);

        if (!db.isExtending(originModel, relOriginModel)) {
            returnError(`Cannot update relation, the relation ${db.name(relationTag)} is not valid for the origin object (${db.name(originModel)}).`,4);
            return;
        }

        // Include backwards compatibility check for File sub-types (e.g. ImageFile -> File)
        if (!(db.isExtending(destinationModel, OFile) && db.isExtending(relDestModel, OFile)) && !db.isExtending(destinationModel, relDestModel)) {
            returnError(`Cannot update relation, the relation ${db.name(relationTag)} is not valid for the destination object (${db.name(destinationModel)}).`,5);
            return;
        }

        // Transaction
        transaction.createRelation(relation, origin, destination);
        Transaction.process(context, transaction)
            .then(() => {
                setOrigin(origin);
                setDestination(destination);
                forwardEvent();
            })
            .catch(message => returnError(`Transaction error: ${message}`, 6));
    }
}

registerBrick('01694800e25a7c39f7b0', CreateRelation);
