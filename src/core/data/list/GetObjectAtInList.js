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

import { FunctionBrick, registerBrick, ListDef } from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Gets the object that is at the specified rank in the list.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| list | List | The list. |
| index | Number | The index of the object. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The retrieved object. |

**/
export default class GetObjectAtInList extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list
     * @param {number} rank
     * @param {function(object)} setObject
     */
    onUpdate(context, [list, rank], [setObject]) {
        const logger = getLogger('Get Object At In List');
        if (Array.isArray(list)) {
            if (list.length > rank) {
                setObject(list[rank]);
            } else {
                logger.warn(`OutOfBound: trying to return a value outside of the array! (rank=${rank}, arrayLength=${list.length})`);
            }
        } else if (list instanceof ListDef) {
            list.observeAt(rank).subscribe(_object => {
                setObject(_object);
            });
        } else {
            logger.error('TypeError: The list should be of type ListDef or Array');
        }
    }
}

registerBrick('016657e42a28d418fcbd', GetObjectAtInList);
