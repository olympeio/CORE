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

import { Brick, registerBrick } from 'olympe';

/**
## Description
Returns `true` if the value passed is `null` or `undefined` at the time this action is triggered.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| value | Object | The value to check. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | Boolean | `true` if the value is either `null` or `undefined`. |
| forwardEvent | ControlFlow |
**/
export default class IsNull extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Object} value
     * @param {function(boolean)} setResult
     * @param {function()} forwardEvent
     */
    update(context, [value], [forwardEvent, setResult]) {
        // Set result to true if current value is undefined
        setResult(value === undefined || value === null);
        forwardEvent();
    }
}

registerBrick('0168e64dbc1811cf5823', IsNull);
