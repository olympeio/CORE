/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { FunctionBrick, registerBrick, ListDef, DBView, predicates, valuedefs } from "olympe";
import {getValueDefFor} from "./utils";
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
     * @param {!ListDef} list
     * @param {!PropertyDescriptor} property
     * @param {string | number | Date} value
     * @param {boolean} strict
     * @param {function(!ListDef)} setFiltered
     */
    onUpdate(context, [list, property, value, strict], [setFiltered]) {
        const logger = getLogger('Filter List Bigger');
        const valueDef = getValueDefFor(property);
        if (valueDef === null) {
            const name = DBView.get().name(/** @type {!HasInstanceTag} */ (property));
            logger.warn(`Type of property ${name} is not supported. List will not be filtered.`);
            setFiltered(list);
        } else if (Array.isArray(list)) {
            logger.warn('Native JS arrays are not yet supported. Ignoring ...');
            setFiltered(list);
        } else if (list instanceof ListDef) {
            const vd = new valuedefs.Constant(value);
            const predicate = strict ? new predicates.Greater(valueDef, vd) :
                new predicates.Or(new predicates.Greater(valueDef, vd), new predicates.Equals(valueDef, vd));
            setFiltered(list.filter(predicate));
        } else {
            logger.error('List is not a ListDef or an Array');
        }
    }
}

registerBrick('01717d5f0ac2f06a8b94', FilterListBigger);
