
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
import { format } from 'date-fns';

/**
## Description
Converts a `DateTime` into a string by applying a format.
The format string is very flexible as it takes a string of tokens and replaces them with their corresponding values.

See https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table for the full list of tokens.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| datetime | DateTime | The date and time to format. |
| format | String | The format to apply (see above). |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| formatted datetime | String | The resulting string. |

**/
export default class FormatDateTime extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {Date} datetime
     * @param {string} formatString
     * @param {function(string)} setFormatedDatetime
     */
    onUpdate(context, [datetime, formatString], [setFormatedDatetime]) {
        setFormatedDatetime(format(datetime, formatString));
    }
}

registerBrick('0166f483d61cf87db282', FormatDateTime);
