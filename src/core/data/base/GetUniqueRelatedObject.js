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

import { FunctionBrick, registerBrick, instanceToTag } from 'olympe';
import {getRelatedObjects} from "../list/GetRelatedObjects";
import {getLogger} from 'logging';


/**
## Description
Retrieves the first object connected to the specified object via a relation.
Note: The direction of the relation is not taken into account.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | Object | The origin object. |
| Relation | Relation | The relation. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The related object. |
**/
export default class GetUniqueRelatedObject extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!InstanceTag} object
     * @param {!InstanceTag} relation
     * @param {function(Sync)} setObject
     */
    update(context, [object, relation], [setObject]) {
        const logger = getLogger('Get Unique Related Object');

        // Prevent errors
        if (instanceToTag(object) === '') {
            logger.error('Invalid `object` provided');
            return;
        } else if (instanceToTag(relation) === '') {
            logger.error('Invalid `relation` provided');
            return;
        }

        const relatedObjects = getRelatedObjects(object, relation);
        relatedObjects.observeSize().subscribe((size) => {
            if (size.value > 1) {
                logger.warn(`${db.name(db.model(object))} ${instanceToTag(object)} is related to ${size.value} objects through relation ${db.name(relation)}`);
            }
        });
        relatedObjects.observeFirst().subscribe(setObject);
    }
}

registerBrick('0167c09126e60d1955fe', GetUniqueRelatedObject);
