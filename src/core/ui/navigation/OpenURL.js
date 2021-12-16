
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
     * @param {boolean} openInSameTab
     * @param {function()} forwardEvent
     * @param {function(boolean)} setResult
     */
    update(context, [url, openInSameTab], [forwardEvent, setResult]) {
        // Use empty URL and target to open a blank page in a new window/tab
        let selfWindow = window.open('', openInSameTab === true ? '_self' : undefined);

        if (selfWindow) {
            // Set the referer and opener window to null to prevent access to this window from the URL
            selfWindow.referer = null;
            selfWindow.opener = null;

            // Update the URL
            selfWindow.location = url;
            setResult(true)
        } else {
            setResult(false)
        }
        // Free reference to target window (prevent cross-reference)
        selfWindow = null;

        forwardEvent();
    }
}

registerBrick('016755c484eeed3da5e5', OpenURL);
