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
import { parse } from 'date-fns';
import {getLogger} from 'logging';

/**
## Description
Converts a string to a datetime using provided format
https://date-fns.org/v2.22.1/docs/parse

**Examples:**

  - "2010-10-20 4:30",       "yyyy-MM-dd H:mm"
  - "2010-02-20 4:30 +0000", "yyyy-MM-dd H:mm xx"

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| dateTimeString | String | dateTime as a String |
| format | String | format |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| date | DateTime | The result of the conversion. |
**/
export default class ParseDateTime extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} dateTimeString
     * @param {string} formatInput
     * @param {function(Date)} setDate
     */
    onUpdate(context, [dateTimeString, formatInput], [setDate]) {
        const format = formatInput || "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
        try {
            setDate(parse(dateTimeString, format, new Date()));
        } catch (e) {
            getLogger('Parse Date Time').error(e);
        }

    }
}

registerBrick('01717d4924328261f7f9', ParseDateTime);
