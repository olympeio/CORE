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

import {FunctionBrick, registerBrick, ListDef, transformers} from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Get objects from a list in a specific range. All items with a rank going from `Start` to `End` (limits included) are
included in the output list.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object list | List | The list from which to take objects. |
| Start | Number | Lower range index. |
| End | Number | Upper range index. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Sublist | List | The sublist. |

**/
export default class FilterListRange extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list the list to be filtered
     * @param {!number} startIndex
     * @param {!number} endIndex
     * @param {!function(ListDef|Array)} setFiltered
     */
    onUpdate(context, [list, startIndex, endIndex], [setFiltered]) {
        const logger = getLogger('Filter List Range');
        const count = endIndex - startIndex + 1;
        if (count <= 0) {
            logger.warn('`endIndex` is smaller than `startIndex`, list is not filtered');
            setFiltered(list);
        } else if(Array.isArray(list)){
            setFiltered(list.slice(startIndex, startIndex+count))
        } else if (list instanceof ListDef) {
            setFiltered(list.transform(new transformers.Limit(startIndex, count)));
        } else {
            logger.error('List is not a ListDef or an Array');
        }
    }
}

registerBrick('01717d5f60be1607fb43', FilterListRange);
