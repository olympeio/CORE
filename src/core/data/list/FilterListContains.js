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

import { Brick, registerBrick, ListDef, predicates, QueryResult } from "olympe";
import {filterArray, filterListDef} from "./utils";
import {getLogger} from 'logging';

export default class FilterListContains extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|Array<!Sync>|!QueryResult} list
     * @param {!PropertyDescriptor} property
     * @param {string} substring
     * @param {function(ListDef|!Array<!Sync>)} setFiltered
     */
    update($, [list, property, substring], [setFiltered]) {
        const logger = getLogger('Filter List Contains');
        if (typeof(substring) !== 'string') {
            logger.warn('The type of `substring` is not supported, it should be a string.');
            setFiltered(list);
        } else if (Array.isArray(list) || list instanceof QueryResult) {
            setFiltered(filterArray(Array.isArray(list) ? list : list.toArray(), (v) => {
                const data = v.get(property);
                if(typeof data === 'string'){
                    return data.includes(substring);
                } else {
                    if(data !== null && data !== undefined){
                        logger.warn(`For some elements in the list, the value of the property is not a string: ${data}`)
                    }
                    return false;
                }
            }));
        } else if (list instanceof ListDef) {
            setFiltered(filterListDef(list, property, substring, (_property, _value) => new predicates.Contains(_property, _value)));
        } else {
            logger.error('List is not a ListDef, an Array or a QueryResult');
        }
    }
}

registerBrick('01673ff7ce3169f42a81', FilterListContains);
