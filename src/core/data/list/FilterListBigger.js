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

import { FunctionBrick, registerBrick, ListDef, predicates } from "olympe";
import {filterArray, filterListDef} from "./utils";
import {getLogger} from 'logging';

/**
## Description
This function filters out a list by comparing a specific object's property to a given threshold value. It generates a
new list that contains only the objects whose property is greater (or equal) to the threshold value. For the moment,
only the following property/value types are supported: string, number, and datetime.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object list | List | The list to filter. |
| Property | Property | The property to filter on. |
| Value | String/Number/Date/DateTime | The threshold value to compare to. |
| Strict | Boolean | Whether the inequality must be strict or not. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Filtered list | List | The resulting list. |

**/
export default class FilterListBigger extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list
     * @param {!PropertyDescriptor} property
     * @param {string | number | Date} value
     * @param {boolean} strict
     * @param {function(!ListDef|!Array)} setFiltered
     */
    update(context, [list, property, value, strict], [setFiltered]) {
        const logger = getLogger('Filter List Bigger');
        if (Array.isArray(list)) {
            setFiltered(filterArray(list, (v) => {
                const _v = v.getProperty(property);
                return strict ? _v > value : _v >= value;
            }));
        } else if (list instanceof ListDef) {
            setFiltered(filterListDef(list, property, value, (_property, _value) => {
                const greater = new predicates.Greater(_property, _value);
                return strict ? greater : new predicates.Or(greater, new predicates.Equals(_property, _value));
            }));
        } else {
            logger.error('List is not a ListDef or an Array');
        }
    }
}

registerBrick('01717d5f0ac2f06a8b94', FilterListBigger);
