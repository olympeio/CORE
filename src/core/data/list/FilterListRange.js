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
