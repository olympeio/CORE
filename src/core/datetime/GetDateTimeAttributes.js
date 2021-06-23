/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
