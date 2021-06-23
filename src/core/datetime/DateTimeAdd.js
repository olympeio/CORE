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
