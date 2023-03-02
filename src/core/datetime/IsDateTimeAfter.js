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
import { isAfter, isEqual } from 'date-fns'

/**
## Description
Returns true if the datetime object is after another datetime object, false otherwise.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Date to compare | Date/Time | The date we want to know if it is after another date. |
| Comparison date| Date/Time | The reference date. |
| Strictly | Boolean | To choose if two equals dates should return true, or not. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Is date after | Date/Time | The result. |

**/
export default class IsDateTimeAfter extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Date} dateToCompare
     * @param {Date} comparisonDate
     * @param {boolean} strictly
     * @param {function(boolean)} setIsDateAfter
     */
    update(context, [dateToCompare, comparisonDate, strictly], [setIsDateAfter]) {
        const strictCompare = isAfter(dateToCompare, comparisonDate);
        if (strictly) {
            setIsDateAfter(strictCompare);
        } else {
            setIsDateAfter(strictCompare || isEqual(dateToCompare, comparisonDate));
        }
    }
}

registerBrick('01783b830eb52a7e2ddf', IsDateTimeAfter);
