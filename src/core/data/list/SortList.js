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
    ListDef,
    PropertyModel,
    DBView,
    comparators,
    transformers,
    valuedefs,
    tagToString,
    StringModel,
    NumberModel,
    DatetimeModel,
    BooleanModel,
    CloudObject,
    QueryResult
} from 'olympe';
import {getLogger} from 'logging';

export default class SortList extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!List} list
     * @param {!Property} property
     * @param {boolean} ascending
     * @param {function(ListDef|Array)} setSortedList
     */
    update($, [list, property, ascending], [setSortedList]) {
        const logger = getLogger('Sort List');

         if (Array.isArray(list) || list instanceof QueryResult) {
            const a = /** @type {!Array<!CloudObject>} */ (Array.isArray(list) ? list : list.toArray());
            const b = a.filter( v => v instanceof CloudObject );
            if (a.length !== b.length) {
                logger.error(`${a.length - b.length} elements were not Instances`);
            }
            const sortedList = b.sort((left, right) => {
                const l_value = left.get(property);
                const r_value = right.get(property);
                if (ascending) {
                    return l_value === r_value ? 0 : l_value < r_value ? -1 : 1;
                } else {
                    return l_value === r_value ? 0 : l_value > r_value ? -1 : 1;
                }
            });
            setSortedList(sortedList);
        } else if (list instanceof ListDef) {
             const type = DBView.get().getUniqueRelated(property, PropertyModel.typeRel);
             let comparator = null;

             // String
             if (type === tagToString(StringModel)) {
                 comparator = new comparators.String(new valuedefs.StringProperty(property));
                 // Number
             } else if (type === tagToString(NumberModel)) {
                 comparator = new comparators.Number(new valuedefs.NumberProperty(property));
                 // Datetime
             } else if (type === tagToString(DatetimeModel)) {
                 comparator = new comparators.DateTime(new valuedefs.DateTimeProperty(property));
                 // Boolean
             } else if (type === tagToString(BooleanModel)) {
                 comparator = new comparators.Number(new valuedefs.BooleanProperty(property));
             }

             if (comparator === null) {
                 logger.error('Property type is not supported');
                 setSortedList(list);
             } else{
                 setSortedList(list.transform(new transformers.Sort(comparator, ascending)));
             }
        } else {
            logger.error('List is not a ListDef, an Array or a QueryResult');
        }
    }
}

registerBrick('01673ff7da4292e70fc2', SortList);
