
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

import { ActionBrick, registerBrick } from 'olympe';

/**
## Description
Opens an URL in a separate tab or window depending on the environment.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| URL | String | The URL to open. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | Boolean | `true` if the URL was successfully opened. |

**/
export default class OpenURL extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} url
     * @param {function()} forwardEvent
     * @param {function(boolean)} setResult
     */
    onUpdate(context, [url], [forwardEvent, setResult]) {
        window.open(url) ? setResult(true) : setResult(false);
        forwardEvent()
    }
}

registerBrick('016755c484eeed3da5e5', OpenURL);
