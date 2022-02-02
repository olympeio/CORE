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
import { ActionBrick, registerBrick, ErrorFlow, File, Sync, Transaction } from 'olympe';
import { dataUrlToBinary, fromBase64 } from 'helpers/binaryConverters';

export default class CreateFileFromBase64 extends ActionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {string=} fileName
     * @param {string=} mimeType
     * @param {string} base64Content
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(File)} setFile
     */
    update(context, [fileName, mimeType, base64Content], [forwardEvent, setErrorFlow, setFile]) {
        const transaction = new Transaction();
        const isDataURL = base64Content.startsWith('data:');

        let finalMimeType = mimeType;
        if (!finalMimeType) {
            // Try to guess the mimetype from the data url.
            const regExpRes = isDataURL ? /^data:(.*);base64.*/.exec(base64Content) : null;
            finalMimeType = regExpRes !== null && regExpRes.length === 2 ? regExpRes[1] : 'text/plain';
        }

        const fileTag = File.createFile(
            transaction,
            fileName || 'new_File_from_CreateFileFromBase64_brick',
            isDataURL ? dataUrlToBinary(base64Content) : fromBase64(base64Content),
            finalMimeType
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

registerBrick('017821d939590a41cc82', CreateFileFromBase64);
