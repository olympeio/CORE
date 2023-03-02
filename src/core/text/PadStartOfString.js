
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

/**
## Description
Method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
Use padStart js function. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s | String | String to pad. |
| length | Number | Output string length. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| padded string | String | Padded string. |

**/
export default class PadStartOfString extends Brick {

    /**
     * @protected
     * @param {!Context} context
     * @param {string} s
     * @param {number} targetLength
     * @param {function(string)} setPaddedString
     */
    update(context, [s, targetLength, padString], [setPaddedString]) {
        setPaddedString(s.padStart(targetLength, padString));
    }
}

registerBrick('01717ca5c5bc30fde055', PadStartOfString);
