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
import { sub } from 'date-fns'

/**
## Description
Removes an amount of days, months, years, weeks, hours, minutes and seconds to a datetime object.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| datetime | DateTime | The initial `DateTime`. |
| years | Number |  |
| months | Number | The months to remove. |
| days | Number | The days to remove. |
| weeks | Number | The weeks to remove. |
| hours | Number | The hours to remove. |
| minutes | Number | The minutes to remove. |
| seconds | Number | The seconds to remove. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| new date | DateTime | The resulting `DateTime`. |
**/
export default class DateTimeSub extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
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
    update(context, [date, years, months, days, weeks, hours, minutes, seconds], [setNewDate]) {
        setNewDate(sub(date, {
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

registerBrick('01783b82f1ca72dfafa7', DateTimeSub);
