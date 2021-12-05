
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

import { FunctionBrick, registerBrick, Sync } from 'olympe';

/**
## Description
Gets a list of all the instances of a given model.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Model | Model | The model. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list of instances. |

**/
export default class GetObjectList extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} model
     * @param {function(!ListDef)} setList
     */
    update(context, [model], [setList]) {
        setList(Sync.getInstancesOf(model));
    }
}

registerBrick('016324f41f20cc166cab', GetObjectList);
