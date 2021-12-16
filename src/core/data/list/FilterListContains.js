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

import { FunctionBrick, registerBrick, ListDef, DBView, predicates, valuedefs, Sync } from "olympe";
import {getValueDefFor} from "./utils";
import {getLogger} from 'logging';

/**
## Description
This function filters out a list to generate a list that will contain objects from the original only when their
the value of the specified string property contains the specified string.
**Example:** All the customers who's first name contains 'John'.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list to filter. |
| Property | Property | The property to test. |
| Substring | String | The string to look for. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The resulting list. |

**/
export default class FilterListContains extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|Array<!Sync>} list
     * @param {!PropertyDescriptor} property
     * @param {string} substring
     * @param {function(ListDef|!Array<!Sync>)} setFiltered
     */
    update(context, [list, property, substring], [setFiltered]) {
        const logger = getLogger('Filter List Contains');
        if (typeof(substring) !== 'string') {
            logger.warn('The type of `substring` is not supported, iut should be a string.');
            setFiltered(list);
        } else if (Array.isArray(list)) {
            const a = /** @type {!Array<!Sync>} */ (list);
            const b = a.filter( v => v instanceof Sync );
            if (a.length !== b.length) {
                logger.error(`${a.length - b.length} elements were not Instances`);
            }
            const res = b.filter(v => {
                const a_value = v.getProperty(property);
                return a_value.includes(substring);
            });
            setFiltered(res);
        } else if (list instanceof ListDef) {
            const valueDef = getValueDefFor(property);
            if (valueDef === null) {
                const name = DBView.get().name(/** @type {!HasInstanceTag} */ (property));
                logger.warn(`Type of property ${name} is not supported. List will not be filtered.`);
                setFiltered(list);
            } else{
                setFiltered(list.filter(new predicates.Contains(valueDef, new valuedefs.Constant(substring))));
            }
        } else {
            logger.error('List is not a ListDef or an Array');
        }
    }
}

registerBrick('01673ff7ce3169f42a81', FilterListContains);
