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
