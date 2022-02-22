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

import {Brick, registerBrick, Query, RelatedTo, Relation, Direction } from 'olympe';

export default class AreObjectsRelated extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!CloudObject} origin
     * @param {!CloudObject} destination
     * @param {!RelationModel} relation Assumed to be always in direction origin->destination
     * @param {function(boolean)} setRelated
     */
    update($, [origin, destination, relation], [setRelated]) {
        Query.from(origin)
            .filter(new RelatedTo(destination).follow(new Relation(relation, Direction.DESTINATION)))
            .execute($)
            .then(queryResult => setRelated(queryResult.size() > 0));
    }
}

registerBrick('0179ea6dd0a21b45bf71', AreObjectsRelated);
