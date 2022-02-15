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
export default class ParseDateTime extends Brick {

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
    update(context, [dateTimeString, formatInput], [setDate]) {
        const format = formatInput || "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
        try {
            setDate(parse(dateTimeString, format, new Date()));
        } catch (e) {
            getLogger('Parse Date Time').error(e);
        }

    }
}

registerBrick('01717d4924328261f7f9', ParseDateTime);
