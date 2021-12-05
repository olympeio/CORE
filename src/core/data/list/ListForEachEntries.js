
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
    update(context, [list], [setObject]) {
        if(Array.isArray(list) || list instanceof ListDef) {
            list.forEach(object => setObject(object));
        } else {
            getLogger('List For Each Entries').error('TypeError: The list should be of type ListDef or Array');
        }
    }
}

registerBrick('01718897a585de88f500', ListForEachEntries);
