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
import { isValid } from 'date-fns'

/**
## Description
Returns true if the datetime object is a valid datetime, false otherwise.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Date | Date/Time | The datetime to verify. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Is valid | Date/Time | True if the datetime is valid, false otherwise. |

**/
export default class IsDateTimeValid extends FunctionBrick {

    /**
     * Executed every time an input (date) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {Date} date
     * @param {function(boolean)} setIsValid
     */
    onUpdate(context, [date], [setIsValid]) {
        setIsValid(isValid(date));
    }
}

registerBrick('01783b83f00e0b88dc79', IsDateTimeValid);