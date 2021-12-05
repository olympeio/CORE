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
import {getLogger} from 'logging';

/**
## Description
Outputs the provided value on the console, it can be any JS object that has a string representation.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| prefix | String | A label to put in front of the message. |
| value | Object | The value to display. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| value | Object | The object that was passed in. |

**/
export default class DebugLog extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} prefix
     * @param {*} value
     * @param {function(*)} setValue
     */
    update(context, [prefix, value], [setValue]) {
        getLogger('Log').info((prefix ? prefix + ': ' : '') + String(value));
        setValue(value);
    }
}

registerBrick('016324e7338307c3ed94', DebugLog);
