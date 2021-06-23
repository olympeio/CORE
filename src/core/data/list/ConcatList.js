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

import {FunctionBrick, registerBrick, ListDef} from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Merge two lists.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| First list | List | First list. |
| Second list | List | Second list. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Concatenated list | List | The concatenation of First and Second list. |

**/
export default class ConcatList extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list1
     * @param {!ListDef|!Array} list2
     * @param {function(!ListDef|!Array)} setConcatenatedList
     */
    onUpdate(context, [list1, list2], [setConcatenatedList]) {
        const logger = getLogger('Concat List');

        // Guards
        if(!Array.isArray(list1) && !(list1 instanceof ListDef)) {
            logger.error('TypeError: the list1 should be of type ListDef or Array');
            return;
        }
        if(!Array.isArray(list2) && !(list2 instanceof ListDef)) {
            logger.error('TypeError: the list2 should be of type ListDef or Array');
            return;
        }

        if(Array.isArray(list1) && Array.isArray(list2)) {
            setConcatenatedList(list1.concat(list2));
        } else if(!Array.isArray(list1) && !Array.isArray(list2)) {
            setConcatenatedList(list1.union(list2));
        } else {
            logger.error('TypeError: both list should be of the same type');
        }
    }
}

registerBrick('01717d5fbc55ea0d361b', ConcatList);
