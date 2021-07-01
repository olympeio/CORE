
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

import { FunctionBrick, registerBrick } from 'olympe';

/**
## Description
Retrieves the value of the specified property from the selected UI element. For example the text color of a label.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| UI Property | Property | The selected property. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Value | Object | The value of the property. |

**/
export default class GetUIProperty extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} _
     * @param {PropertyPrimitive} uiProperty
     * @param {function(PropertyPrimitive)} setValue
     */
    onUpdate(_, [uiProperty], [setValue]) {
        setValue(uiProperty)
    }
}

registerBrick('0162de7dd5abdc9dec7f', GetUIProperty);
