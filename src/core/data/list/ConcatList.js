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
