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

import { Brick, registerBrick, tagToString, transformers, ListDef } from 'olympe';
import {getLogger} from 'logging';
import { getRelationDirection } from './utils';

/**
 * @param {!InstanceTag} object
 * @param {!InstanceTag} relation
 * @return {transformers.Related<Sync, Sync>}
 */
export const getOrientedRelation = (object, relation) => {
    const direction = getRelationDirection(object, relation);
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

export default class GetRelatedObjects extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!Array} inputs
     * @param {!Array} outputs
     */
    update(context, [object, relation], [setList]) {
        const logger = getLogger('Get Related Objects');
        // Prevent errors
        if (tagToString(object) === '') {
            logger.error('Invalid `object` provided, must be a business object, or a tag');
            return;
        } else if (tagToString(relation) === '') {
            logger.error('Invalid `relation` provided');
            return;
        }

        setList(getRelatedObjects(object, relation));
    }
}

registerBrick('0168190b633088746a60', GetRelatedObjects);
