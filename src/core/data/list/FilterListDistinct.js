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
import {filterArray} from './utils';
import {getLogger} from 'logging';

/**
## Description
Filter out duplicate items from a list. The object tags are used to identify duplicates.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object list | List | List with duplicate items to filter out. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Filtered list | List | The filtered list without duplicate items. |

**/
export default class FilterListDistinct extends FunctionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {!Array<!Sync>|!ListDef} list
     * @param {function(!Array<!Sync>|!ListDef)} setFiltered
     */
    update(context, [list], [setFiltered]) {
        if (Array.isArray(list)) {
            const tags = new Set();
            setFiltered(filterArray(list, (v) => {
                if (!tags.has(v.getTag())) {
                    tags.add(v.getTag());
                    return true;
                } else {
                    return false;
                }
            }));
        } else if (list instanceof ListDef) {
            setFiltered(list.transform(new transformers.Distinct()));
        } else {
            getLogger('Filter List Distinct').error('List is not a ListDef or an Array');
        }
    }
}

registerBrick('0171839084d99a3f99e1', FilterListDistinct);
