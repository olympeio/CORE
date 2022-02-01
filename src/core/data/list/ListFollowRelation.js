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

import {FunctionBrick, registerBrick, ListDef, instanceToTag, transformers, Direction} from 'olympe';
import {getLogger} from 'logging';

/**
NO DOC
**/
export default class ListFollowRelation extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef} list
     * @param {!RelationModel} relation
     * @param {boolean} toOrigin
     * @param {function(!ListDef)} setFlattenedList
     */
    update(context, [list, relation, toOrigin], [setFlattenedList]) {
        const logger = getLogger('List Follow Relation');

        // Guards
        if (!(list instanceof ListDef)) {
            logger.error('TypeError: the list should be of type ListDef.');
            return;
        }
        if (!instanceToTag(relation)) {
            logger.error('relation is not specified');
            return;
        }

        // Transformer
        setFlattenedList(list.transform(
            new transformers.Related(relation, toOrigin ? Direction.ORIGIN : Direction.DESTINATION)
        ));
    }
}

registerBrick('016b74da62846557a6f3', ListFollowRelation);
