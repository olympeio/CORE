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

import { FunctionBrick, registerBrick, ListDef, onDestroy } from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Watch a list for entries deletion. Continuously get the tags of entries that get deleted. Tags of entries removed
before the first execution of the function will not be returned.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list to watch for entries deletion. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Tag | String | Tag of the last entry removed (if any was removed after the brick has started executing). |
**/
export default class ListForEachRemovedEntries extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef} list
     * @param {function(object)} setObject
     */
    onUpdate(context, [list], [setObject]) {
        if (list instanceof ListDef) {
            list.forEach(
                (object) => {
                    const tag = object.getTag();
                    onDestroy(() => { setObject(tag); });
                }
            );
        } else {
            getLogger('List For Each Removed Entries').error('TypeError: The list should be of type ListDef');
        }
    }
}

registerBrick('017188985cc5ec13b200', ListForEachRemovedEntries);
