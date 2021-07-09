
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
import { addMilliseconds } from 'date-fns'

/**
## Description
Creates a new `DateTime` by adding an amount of time from the provided `DateTime`.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| datetime | DateTime | The initial `DateTime`. |
| duration | Number | The duration, in milliseconds, to add. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| datetime | DateTime | The resulting `DateTime`. |

**/
export default class DateTimePlusDeprecated extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {Date} datetime
     * @param {number} duration
     * @param {function(Date)} setDatetime
     */
    onUpdate(context, [datetime, duration], [setDatetime]) {
        setDatetime(addMilliseconds(datetime, duration));
    }
}

registerBrick('0166f7ef979027d32b21', DateTimePlusDeprecated);
