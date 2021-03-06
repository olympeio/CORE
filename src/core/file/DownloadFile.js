
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
Downloads a file and save it locally.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| File | File | The file to download. |
| Name | String | The name for the save file. |

**/
export default class DownloadFile extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} name
     * @param {File} file
     * @param {function()} forwardEvent
     */
    update(context, [name, file], [forwardEvent]) {
        file.saveAs(name || file.get(File.nameProp));
        forwardEvent();
    }
}

registerBrick('0165a8c453cf0bfb25f3', DownloadFile);
