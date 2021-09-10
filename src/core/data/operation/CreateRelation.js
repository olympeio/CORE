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

import {FunctionBrick, registerBrick, instanceToTag, DBView, RelationPrimitive} from 'olympe';
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
export default class CreateRelation extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} origin
     * @param {InstanceTag} relation
     * @param {InstanceTag} destination
     * @param {function(InstanceTag)} setOrigin
     */
    onUpdate(context, [relation, origin, destination], [setOrigin]) {
        const logger = getLogger('Create Relation');

        // Validate arguments
        const relationTag = instanceToTag(relation);
        const originTag = instanceToTag(origin);
        if (relationTag === '') {
            logger.error('No relation specified');
            return;
        }
        if (originTag === '') {
            logger.error('No origin specified');
            return;
        }

        if (!(destination && destination.getTag())) {
            logger.error('Cannot update relation, destination is not an object');
            return;
        }

        const db = DBView.get();
        if (!db.instanceOf(origin, db.getUniqueRelated(relationTag, RelationPrimitive.originModelRel))) {
            logger.error(`Cannot update relation, the relation ${db.name(instanceToTag(relation))} is not valid for the origin object (${db.name(db.model(origin))}).`);
            return;
        }

        if (!db.instanceOf(destination, db.getUniqueRelated(relationTag, RelationPrimitive.destinationModelRel))) {
            logger.error(`Cannot update relation, the relation ${db.name(instanceToTag(relation))} is not valid for the destination object (${db.name(db.model(destination))}).`);
            return;
        }
        // start isolated local transaction
        const transaction = context.getTransaction();

        // Add transaction operation
        // Note: the relation direction is automatically treated
        transaction.createRelation(relation, origin, destination);

        // Execute the transaction
        transaction.execute(
            success => {
                if (!success) {
                    logger.error('Isolated transaction (local) failed');
                } else {
                    // Set the output to the input object
                    // it is done inside the TransactionCallback to avoid firing potential following
                    // CreateRelation too early, which could cause errors in the orchestrator
                    setOrigin(origin);
                }
            }
        );
    }
}

registerBrick('01694800e25998fe5b81', CreateRelation);
