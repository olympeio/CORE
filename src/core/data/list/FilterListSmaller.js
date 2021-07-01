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

import {FunctionBrick, registerBrick, ListDef, DBView, predicates, valuedefs} from "olympe";
import {getValueDefFor} from "./utils";
import {getLogger} from 'logging';

/**
## Description
This function filters out a list by comparing a specific object's property to a given threshold value. It generates a
new list that contains only the objects whose property is smaller (or equal) to the threshold value. For the moment,
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
export default class FilterListSmaller extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef} list
     * @param {!PropertyDescriptor} property
     * @param {string | number | Date} value
     * @param {boolean} strict
     * @param {function(!ListDef)} setFiltered
     */
    onUpdate(context, [list, property, value, strict], [setFiltered]) {
        const logger = getLogger('Filter List Smaller');
        const valueDef = getValueDefFor(property);
        if (valueDef === null) {
            const name = DBView.get().name(/** @type {!HasInstanceTag} */ (property));
            logger.warn(`Type of property ${name} is not supported. List will not be filtered.`);
            setFiltered(list);
        } else if (Array.isArray(list)) {
            logger.warn('Native JS arrays are not yet supported. Ignoring ...');
            setFiltered(list);
        }  else if (list instanceof ListDef) {
            const vd = new valuedefs.Constant(value);
            const predicate = strict ? new predicates.Smaller(valueDef, vd) : new predicates.Or(new predicates.Smaller(valueDef, vd), new predicates.Equals(valueDef, vd));
            setFiltered(list.filter(predicate));
        } else {
            logger.error('List is not a ListDef or an Array');
        }
    }
}

registerBrick('01717d5ebd43cb94b392', FilterListSmaller);
