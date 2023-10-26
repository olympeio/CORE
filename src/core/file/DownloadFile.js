
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

import { ActionBrick, registerBrick, File as OFile} from 'olympe';

export default class DownloadFile extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {File} file
     * @param {string} name
     * @param {function()} forwardEvent
     */
    update($, [file, name], [forwardEvent]) {
        file.saveAs(name ?? file.get(OFile.fileNameProp));
        forwardEvent();
    }
}

registerBrick('0165a8c453cf0bfb25f3', DownloadFile);
