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

import { Brick, registerBrick, instanceToTag, RelationModel, Direction, DBView, transformers, ListDef } from 'olympe';
import {getLogger} from 'logging';

/**
 * @param {!InstanceTag} object
 * @param {!InstanceTag} relation
 * @return {transformers.Related<Sync, Sync>}
 */
export const getOrientedRelation = (object, relation) => {
    const db = DBView.get();

    // NB Relation here is a instance of Relation
    // Get model at origin of relation
    const originModel = db.getUniqueRelated(relation, RelationModel.originModelRel);

    // Auto detect the direction in which the relation should be followed : assess whether the provided object is an instance of the relation's origin
    // In case the relation as the same model as origin and destination, the only supported behaviour is origin -> destination (COM-1042)
    const direction = db.getExtendedModels(db.model(object)).includes(originModel) ? Direction.DESTINATION : Direction.ORIGIN;

    return new transformers.Related(relation, direction);
}

/**
 * @param {!InstanceTag} object
 * @param {!InstanceTag} relation
 * @return {ListDef}
 */
export const getRelatedObjects = (object, relation) => {
    return new ListDef(object, getOrientedRelation(object, relation));
};

/**
 ## Description
 Generates a list of all the objects that are connected to the specified object via a relation.
 Note: The direction of the relation is not taken into account.
 ## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | Object | Object | The origin object. |
 | Relation | Relation | The relation. |
 ## Outputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | List | List | The list of objects. |
 **/
export default class GetRelatedObjects extends Brick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} inputs
     * @param {!Array} outputs
     */
    update(context, [object, relation], [setList]) {
        const logger = getLogger('Get Related Objects');
        // Prevent errors
        if (instanceToTag(object) === '') {
            logger.error('Invalid `object` provided, must be a business object, or a tag');
            return;
        } else if (instanceToTag(relation) === '') {
            logger.error('Invalid `relation` provided');
            return;
        }

        setList(getRelatedObjects(object, relation));
    }
}

registerBrick('0168190b633088746a60', GetRelatedObjects);
