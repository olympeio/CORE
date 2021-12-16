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

import {FunctionBrick, registerBrick, ListDef, DBView, predicates, valuedefs, Sync} from "olympe";
import {getValueDefFor} from "./utils";
import {getLogger} from 'logging';

/**
## Description
This function filters out a list by comparing a specific object's property to a given value. It generates a new list
that contains only the objects whose property is equal to the filtering value. For the moment, only the following
property/value types are supported: string, number, boolean, and datetime.

**Example**: All the customers who are not married.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| list | List | The list to filter. |
| property | Property | The property to test. |
| filter | Object | The value to compare with. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| list | List | The resulting list. |

**/
export default class FilterListEquals extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef | !Array} list
     * @param {!PropertyDescriptor} property
     * @param {string | number | Date} value
     * @param {boolean} not
     * @param {function(!ListDef | !Array)} setFiltered
     */
    update(context, [list, property, value, not], [setFiltered]) {
        const logger = getLogger('Filter List Equals');
        if (Array.isArray(list)) {
            const a = /** @type {!Array} */ (list);
            const b = a.filter( v => v instanceof Sync );
            if (a.length !== b.length) {
                logger.error(`${a.length - b.length} elements were not Instances`);
            }
            const res = b.filter(v => {
                const a_value = v.getProperty(property);
                return a_value === value ? !not : not;
            });
            setFiltered(res);
        } else if (list instanceof ListDef) {
            const valueDef = getValueDefFor(property, true);
            if (valueDef === null) {
                const name = DBView.get().name(/** @type {!HasInstanceTag} */ (property));
                logger.warn(`Type of property ${name} is not supported. List will not be filtered.`);
                setFiltered(list);
            } else {
                const equalsFilter = new predicates.Equals(valueDef, new valuedefs.Constant(value));
                setFiltered(list.filter(not ? new predicates.Not(equalsFilter) : equalsFilter));
            }
        } else {
            logger.error('List is not a ListDef or an Array');
        }
    }
}

registerBrick('01674138206e8fde93fb', FilterListEquals);
