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

import {ActionBrick, registerBrick, instanceToTag, ErrorFlow, DBView, RelationPrimitive, CreateInstance} from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Creates a specified relation between 2 given objects.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The origin object. |
| relation | Relation | The relation. |
| destination | Object | The destination object. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The origin Object. |

**/
export default class CreateRelation extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Sync} origin
     * @param {!Relation} relation
     * @param {!Sync} destination
     * @param {function()} forwardEvent
     * @param {function(!Sync)} setOrigin
     * @param {function(ErrorFlow)} setErrorFlow
     */
    onUpdate(context, [origin, relation, destination], [forwardEvent, setOrigin, setErrorFlow]) {
        const logger = getLogger('Create Relation');

        const returnError = (message, code) => {
            logger.error(message);
            setErrorFlow(ErrorFlow.create(message, code));
        };

        const relationTag = instanceToTag(relation);
        const originTag = instanceToTag(origin);
        const destinationTag = instanceToTag(destination);
        // Guards
        if (relationTag === '') {
            returnError('No relation specified',1);
            return;
        }
        if (originTag === '') {
            returnError('No origin object specified', 2);
            return;
        }
        if (destinationTag === '') {
            returnError('No destination object specified', 3);
            return;
        }

        const db = DBView.get();
        const originModel = origin instanceof CreateInstance ? origin.getModelTag() : db.model(origin);
        const destinationModel = destination instanceof CreateInstance ? destination.getModelTag() : db.model(destination);

        if (!db.isExtending(originModel, db.getUniqueRelated(relationTag, RelationPrimitive.originModelRel))) {
            returnError(`Cannot update relation, the relation ${db.name(relationTag)} is not valid for the origin object (${db.name(originModel)}).`,4);
            return;
        }

        if (!db.isExtending(destinationModel, db.getUniqueRelated(relationTag, RelationPrimitive.destinationModelRel))) {
            returnError(`Cannot update relation, the relation ${db.name(relationTag)} is not valid for the destination object (${db.name(destinationModel)}).`,5);
            return;
        }

        // Transaction
        context.getTransaction().createRelation(relation, origin, destination);
        context.releaseTransaction((executed, success, message) => {
            if(executed && !success) {
                returnError(`Transaction error: ${message}`, 6);
            } else {
                setOrigin(origin);
                forwardEvent();
            }
        });
    }
}

registerBrick('01694800e25a7c39f7b0', CreateRelation);
