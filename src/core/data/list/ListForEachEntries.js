
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

/**
## Description
Get all entries of a list. First, get all entries existing before the execution of this function. Then, continuously
get all new entries added to the watched list.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list from which to get entries. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Entry | Object | A single list entry. |
**/
export default class ListForEachEntries extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list
     * @param {function(object)} setObject
     */
    onUpdate(context, [list], [setObject]) {
        if(Array.isArray(list) || list instanceof ListDef) {
            list.forEach(object => setObject(object));
        } else {
            getLogger('List For Each Entries').error('TypeError: The list should be of type ListDef or Array');
        }
    }
}

registerBrick('01718897a585de88f500', ListForEachEntries);
