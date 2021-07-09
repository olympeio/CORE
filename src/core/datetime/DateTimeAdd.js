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
import { add } from 'date-fns'

/**
## Description
Adds an amount of days, months, years, weeks, hours, minutes and seconds to a datetime object.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| datetime | DateTime | The initial `DateTime`. |
| years | Number | The years to add. |
| months | Number | The months to add. |
| days | Number | The days to add. |
| weeks | Number | The weeks to add. |
| hours | Number | The hours to add. |
| minutes | Number | The minutes to add. |
| seconds | Number | The seconds to add. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| new date | DateTime | The resulting `DateTime`. |
**/
export default class DateTimeAdd extends FunctionBrick {

    /**
     * Executed every time an input (date, years, months, days, weeks, hours, minutes, seconds) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {Date} date
     * @param {number} years
     * @param {number} months
     * @param {number} days
     * @param {number} weeks
     * @param {number} hours
     * @param {number} minutes
     * @param {number} seconds
     * @param {function(Date)} setNewDate
     */
    onUpdate(context, [date, years, months, days, weeks, hours, minutes, seconds], [setNewDate]) {
        setNewDate(add(date, {
            'years': years,
            'months': months,
            'weeks': weeks,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }));
    }
}

registerBrick('01783b82c11991d09ae9', DateTimeAdd);
