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
import { getYear, getMonth, getDate, getHours, getMinutes, getSeconds } from 'date-fns'

/**
## Description
Provides the years, the months, the days, the hours, the minutes and the seconds of a datetime object.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Date | Date/Time | The datetime from which we want to get the attributes. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Year | Number | The year of the given datetime. |
| Month (natural) | Number | The month of the given datetime. |
| Day of the month | Number | The day of the month of the given datetime. |
| Hour (24-format) | Number | The hour of the given datetime. |
| Minutes | Number | The minutes of the given datetime. |
| Seconds | Number | The seconds of the given datetime. |

**/
export default class GetDateTimeAttributes extends FunctionBrick {

    /**
     * Executed every time an input (date) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {Date} date
     * @param {function(number)} setYear
     * @param {function(number)} setMonthNatural
     * @param {function(number)} setDayOfTheMonth
     * @param {function(number)} setHour24format
     * @param {function(number)} setMinutes
     * @param {function(number)} setSeconds
     */
    onUpdate(context, [date], [setYear, setMonthNatural, setDayOfTheMonth, setHour24format, setMinutes, setSeconds]) {
        setYear(getYear(date));
        setMonthNatural(getMonth(date) + 1);
        setDayOfTheMonth(getDate(date));
        setHour24format(getHours(date));
        setMinutes(getMinutes(date));
        setSeconds(getSeconds(date));
    }
}

registerBrick('01783b83a0faa2f101f3', GetDateTimeAttributes);
