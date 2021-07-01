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

import { FunctionBrick, registerBrick, ListDef } from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Returns the size of the provided list. That is the number of elements in that list.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Size | Number | The size of the list. |

**/
export default class GetSizeOfList extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list
     * @param {function(number)} setSize
     */
    onUpdate(context, [list], [setSize]) {
        // Guard
        if (!Array.isArray(list) && !(list instanceof ListDef)) {
            getLogger('Get Size Of List').error('TypeError: the list should be of type ListDef or Array');
            return;
        }

        if (Array.isArray(list)) {
            setSize(list.length);
        } else {
            list.observeSize().subscribe(_size => {
                setSize(_size);
            });
        }
    }
}

registerBrick('016372362aac07c772f3', GetSizeOfList);
