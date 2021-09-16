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
import { ActionBrick, registerBrick, File, Transaction, ErrorFlow } from 'olympe';

export default class CreateFileFromURL extends ActionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {string=} fileName
     * @param {string=} mimeType
     * @param {string} url
     * @param {function(File)} setFile
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function()} forwardEvent
     */
    onUpdate(context, [fileName, mimeType, url], [setFile, setErrorFlow, forwardEvent]) {
        const transaction = new Transaction();
        const fileTag = File.createFileFromURL(
            File,
            transaction,
            fileName || 'new_File_from_CreateFileFromURL_brick',
            url,
            mimeType || 'text/plain'
        );
        transaction.persistInstance(fileTag, false);
        transaction.execute((success, message) => {
            if (success) {
                setFile(Sync.getInstance(fileTag));
                forwardEvent();
            } else {
                setErrorFlow(ErrorFlow.create(message, 1));
            }
        });
    }
}

registerBrick('017bc1ea3fad868319fc', CreateFileFromURL);