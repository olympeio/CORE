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

export default class FilterListSmaller extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!Array<!Sync>|!QueryResult} list
     * @param {!PropertyDescriptor} property
     * @param {string | number | Date} value
     * @param {boolean} strict
     * @param {function(!ListDef | !Array<!Sync>)} setFiltered
     */
    update($, [list, property, value, strict], [setFiltered]) {
        if (Array.isArray(list) || list instanceof QueryResult) {
            setFiltered(filterArray(Array.isArray(list) ? list : list.toArray(), (v) => {
                const _v = v.get(property);
                return strict ? _v < value : _v <= value;
            }));
        } else if (list instanceof ListDef) {
            setFiltered(filterListDef(list, property, value, (_property, _value) => {
                const smaller = new predicates.Smaller(_property, _value);
                return strict ? smaller : new predicates.Or(smaller, new predicates.Equals(_property, _value));
            }));
        } else {
            getLogger('Filter List Smaller').error('List is not a ListDef, an Array or a QueryResult');
        }
    }
}

registerBrick('01717d5ebd43cb94b392', FilterListSmaller);
