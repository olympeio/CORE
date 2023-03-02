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
    instanceToTag,
    DBView,
    RelationModel,
    Transaction,
    File as OFile
} from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Creates a new relation connecting the two provided objects.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The object at the origin of the relation. |
| destination | Object | The object at the destination. |
| relation | Relation | The relation type. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The origin object. |
**/
export default class CreateRelation extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {InstanceTag} origin
     * @param {InstanceTag} relation
     * @param {InstanceTag} destination
     * @param {function(InstanceTag)} setOrigin
     */
    update(context, [origin, relation, destination], [setOrigin]) {
        const logger = getLogger('Create Relation');

        // Validate arguments
        const relationTag = instanceToTag(relation);
        const originTag = instanceToTag(origin);
        const destinationTag = instanceToTag(destination);
        if (relationTag === '') {
            logger.error('No relation specified');
            return;
        }
        if (originTag === '') {
            logger.error('No origin specified');
            return;
        }

        if (destinationTag === '') {
            logger.error('No destination specified');
            return;
        }

        // start isolated local transaction
        const transaction = Transaction.from(context);

        const db = DBView.get();
        const originModel = transaction.model(origin);
        const destinationModel = transaction.model(destination);
        const relOriginModel = db.getUniqueRelated(relationTag, RelationModel.originModelRel);
        const relDestModel = db.getUniqueRelated(relationTag, RelationModel.destinationModelRel);

        if (!db.isExtending(originModel, relOriginModel)) {
            logger.error(`Cannot update relation, the relation ${db.name(relationTag)} is not valid for the origin object (${db.name(originModel)}).`);
            return;
        }
        // Include backwards compatibility check for File sub-types (e.g. ImageFile -> File)
        if (!(db.isExtending(destinationModel, OFile) && db.isExtending(relDestModel, OFile)) && !db.isExtending(destinationModel, relDestModel)) {
            logger.error(`Cannot update relation, the relation ${db.name(relationTag)} is not valid for the destination object (${db.name(destinationModel)}).`);
            return;
        }

        // Add transaction operation
        // Note: the relation direction is automatically treated
        transaction.createRelation(relation, origin, destination);

        // Execute the transaction
        // Set the output to the input object
        // it is done inside the TransactionCallback to avoid firing potential following
        // CreateRelation too early, which could cause errors in the orchestrator
        Transaction.process(context, transaction)
            .then(() => setOrigin(origin))
            .catch(() => logger.error('Isolated transaction (local) failed'));
    }
}

registerBrick('01694800e25998fe5b81', CreateRelation);
