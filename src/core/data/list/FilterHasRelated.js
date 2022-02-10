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

import {Brick, registerBrick, ListDef, predicates, Direction, instanceToTag, DBView, QueryResult} from 'olympe';
import {getLogger} from 'logging';

/**
 * @param {Array} list
 * @param {boolean=} inverseFilter
 * @return {?Array}
 */
const filterList = (list, inverseFilter) => {
    const db = DBView.get();
    let invalidObject = false;
    list.filter((object) => {
        if (instanceToTag(object) === '') {
            getLogger('Filter Has Related').error('One object in the list has no valid tag');
            invalidObject = true;
            return false;
        } else {
            const isRelated = db.isRelated(object, relation, relatedObject);
            return inverseFilter ? !isRelated : isRelated;
        }
    });
    return invalidObject ? null : list;
};

export default class FilterHasRelated extends Brick {

    /**
     * Executed every time an input (list, relatedObject, relation, inverseFilter) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!Array|!QueryResult} list
     * @param {!InstanceTag} relatedObject
     * @param {!Relation} relation
     * @param {boolean} inverseFilter
     * @param {function(!ListDef|Array)} setFilteredList
     */
    update($, [list, relatedObject, relation, inverseFilter], [setFilteredList]) {
        const logger = getLogger('Filter Has Related');

        if (instanceToTag(relatedObject) === '') {
            logger.error('`related object` has no valid tag');
        } else if(Array.isArray(list) || list instanceof QueryResult) {
            const filteredList = filterList(list, inverseFilter);
            if (filteredList !== null) {
                setFilteredList(filteredList);
            }
        } else if (list instanceof ListDef) {
            const relatedFilter = new predicates.HasRelated([relation], [Direction.DESTINATION], relatedObject);
            setFilteredList(list.filter(inverseFilter ? new predicates.Not(relatedFilter) : relatedFilter));
        } else {
            logger.error('TypeError: The list should be of type ListDef, Array or QueryResult');
        }
    }
}

registerBrick('016c703cb5ba00f37159', FilterHasRelated);
