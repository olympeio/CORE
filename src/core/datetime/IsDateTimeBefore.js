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
import { isBefore, isEqual } from 'date-fns'

/**
## Description
Returns true if the datetime object is before another datetime object, false otherwise.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Date to compare | Date/Time | The date we want to know if it is before another date. |
| Comparison date | Date/Time | The reference date. |
| Strictly | Boolean | To choose if two equals dates should return true, or not. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Is date before | Date/Time | The result. |

**/
export default class IsDateTimeBefore extends FunctionBrick {

    /**
     * Executed every time an input (dateToCompare, comparisonDate, strictly) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {Date} dateToCompare
     * @param {Date} comparisonDate
     * @param {boolean} strictly
     * @param {function(boolean)} setIsDateBefore
     */
    onUpdate(context, [dateToCompare, comparisonDate, strictly], [setIsDateBefore]) {
        const strictCompare = isBefore(dateToCompare, comparisonDate);
        if (strictly) {
            setIsDateBefore(strictCompare);
        } else {
            setIsDateBefore(strictCompare || isEqual(dateToCompare, comparisonDate));
        }
    }
}

registerBrick('01783b8342bb01350425', IsDateTimeBefore);
