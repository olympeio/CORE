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

import { Brick, registerBrick, Relation, Direction } from 'olympe';
import { getLogger } from 'logging';

export default class GetUniqueRelatedObject extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!CloudObject} object
     * @param {!RelationModel} relation Assumed to be always in direction origin->destination
     * @param {function(!CloudObject)} setObject
     */
    update($, [object, relation], [setObject]) {
        object.follow(new Relation(relation, Direction.DESTINATION))
            .observe($)
            .subscribe(result => {
                if(result.size() > 1) {
                    getLogger('Get Unique Related Object')
                        .warn(`${object.getModel().name()} ${object.getTag()} is related to ${result.size()} objects through relation ${relation.name()}`);
                }
                setObject(result.getFirst());
            });
    }
}

registerBrick('0167c09126e60d1955fe', GetUniqueRelatedObject);
