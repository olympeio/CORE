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

import { FunctionBrick, registerBrick, instanceToTag } from 'olympe';

/**
## Description
Get the tag of an object.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | Object | The object. |
| Name | Type | Description |
| --- | :---: | --- |
| value | string | The object tag. |
**/
export default class GetObjectTag extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!InstanceTag} object
     * @param {function(string)} setValue
     */
    onUpdate(context, [object], [setValue]) {
        setValue(instanceToTag(object));
    }
}

registerBrick('0164136be50e7c4cd5a8', GetObjectTag);
