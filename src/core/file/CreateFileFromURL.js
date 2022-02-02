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
import { ActionBrick, registerBrick, File, Transaction, ErrorFlow, Sync } from 'olympe';

export default class CreateFileFromURL extends ActionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {string=} fileName
     * @param {string=} mimeType
     * @param {string} url
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(File)} setFile
     */
    update(context, [fileName, mimeType, url], [forwardEvent, setErrorFlow, setFile]) {
        const transaction = new Transaction();
        const fileTag = File.createFileFromURL(
            transaction,
            fileName || 'new_File_from_CreateFileFromURL_brick',
            url,
            mimeType || 'text/plain'
        );
        transaction.persistInstance(fileTag, false);
        transaction.execute()
            .then(() => {
                setFile(Sync.getInstance(fileTag));
                forwardEvent();
            })
            .catch(message => setErrorFlow(ErrorFlow.create(message, 1)));
    }
}

registerBrick('017bc1ea3fad868319fc', CreateFileFromURL);
