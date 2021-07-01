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

import {FunctionBrick, registerBrick, ListDef, PropertyPrimitive, DBView, comparators, transformers, valuedefs, instanceToTag, StringPrimitive, NumberPrimitive, DatetimePrimitive, BooleanPrimitive} from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Generate a new list containing the elements of the provided list sorted in ascending or descending order
depending on the `asc` parameter.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object list | List | The list to sort. |
| Property | Property | The property of the elements to base the sort on. |
| ASC | Boolean | `true` to sort in ascending order, `false` for descending. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Sorted list | List | The resulting list. |

**/
export default class SortList extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list
     * @param {!Property} property
     * @param {boolean} ascending
     * @param {function(ListDef|Array)} setSortedList
     */
    onUpdate(context, [list, property, ascending], [setSortedList]) {
        const logger = getLogger('Sort List');

        const type = DBView.get().getUniqueRelated(property, PropertyPrimitive.typeRel);
        let comparator = null;

        // String
        if (type === instanceToTag(StringPrimitive)) {
            comparator = new comparators.String(new valuedefs.StringProperty(property));
        // Number
        } else if (type === instanceToTag(NumberPrimitive)) {
            comparator = new comparators.Number(new valuedefs.NumberProperty(property));
        // Datetime
        } else if (type === instanceToTag(DatetimePrimitive)) {
            comparator = new comparators.DateTime(new valuedefs.DateTimeProperty(property));
        // Boolean
        } else if (type === instanceToTag(BooleanPrimitive)) {
            comparator = new comparators.Number(new valuedefs.BooleanProperty(property));
        }

        if (comparator === null) {
            logger.error('Property type is not supported');
        } else if (Array.isArray(list)) {
            // TODO compare() to be exposed
            logger.warn('Native JS arrays are not yet supported. Ignoring ...');
            setSortedList(list);
            // sortedList = list.sort((a, b) => {
            //     const a_value = a.getProperty(property);
            //     const b_value = b.getProperty(property);
            //     return ascending ? comparator.compare(a_value, b_value) : comparator.compare(b_value, a_value);
            // });
        } else if (list instanceof ListDef) {
            setSortedList(list.transform(new transformers.Sort(comparator, ascending)));
        } else {
            logger.error('List is not a ListDef or an Array');
        }
    }
}

registerBrick('01673ff7da4292e70fc2', SortList);
