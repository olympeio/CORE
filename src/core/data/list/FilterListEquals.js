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

import {Brick, registerBrick, ListDef, predicates, QueryResult} from "olympe";
import {filterArray, filterListDef} from "./utils";
import {getLogger} from 'logging';

export default class FilterListEquals extends Brick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!List} list
     * @param {!PropertyDescriptor} property
     * @param {string | number | Date} value
     * @param {boolean} not
     * @param {function(!ListDef | !Array)} setFiltered
     */
    update($, [list, property, value, not], [setFiltered]) {
        if (Array.isArray(list) || list instanceof QueryResult) {
            setFiltered(filterArray(Array.isArray(list) ? list : list.toArray(), (v) => v.get(property) === value ? !not : not));
        } else if (list instanceof ListDef) {
            setFiltered(filterListDef(list, property, value, (_property, _value) => {
                const equals = new predicates.Equals(_property, _value);
                return not ? new predicates.Not(equals) : equals;
            }, true));
        } else {
            getLogger('Filter List Equals').error('List is not a ListDef, an Array or a QueryResult');
        }
    }
}

registerBrick('01674138206e8fde93fb', FilterListEquals);
