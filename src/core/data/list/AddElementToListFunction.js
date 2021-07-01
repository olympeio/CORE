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

import {FunctionBrick, registerBrick, ListDef, Sync, instanceToTag} from 'olympe';
import {getLogger} from 'logging';

/**
 *
 * @param {!ListDef|!Array} list
 * @param {!Sync|!Object} object
 * @return {!ListDef|!Array}
 */
export const addElementToList = (list, object) => {
    const logger = getLogger('Add Element To List');

    // Guards
    if (!Array.isArray(list) && !(list instanceof ListDef)) {
        logger.error('TypeError: the list should be of type ListDef or Array');
        return;
    }
    if (list instanceof ListDef && !(object instanceof Sync)) {
        logger.error('TypeError: only a Sync can be added to a ListDef');
        return;
    }

    // Addition
    let newList;
    if (Array.isArray(list)) {
        newList = Array.from(list); // Generate shallow copy of the array
        newList.push(object);
    } else {
        newList = list.union(new ListDef(instanceToTag(object), [])); // New listdef: union of the previous + 1 instance.
    }

    // Done
    return newList;
};

/**
## Description
Adds en element to a list.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list in which the element will be added. |
| Object | Object | The element to add. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The result list, with the added element. |
**/
export default class AddElementToListFunction extends FunctionBrick {

    /**
     * Executed every time an input (list, object) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {!ListDef|!Array} list
     * @param {!Sync|!Object} object
     * @param {function(!ListDef|!Array)} setList
     */
    onUpdate(context, [list, object], [setList]) {
        setList(addElementToList(list, object));
    }
}

registerBrick('0179c7aee952dc922de1', AddElementToListFunction);
