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
import {ActionBrick, registerBrick, Transaction, File as OFile, CloudObject, ErrorFlow} from 'olympe';

export default class SetFileContentFromURL extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {File} file
     * @param {string} fileName
     * @param {string} mimeType
     * @param {string} url
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(File)} setFile
     */
    update($, [file, fileName, mimeType, url], [forwardEvent, setErrorFlow, setFile]) {
        const transaction = Transaction.from($);
        OFile.setURLContent(
            transaction,
            file,
            fileName ?? 'File_from_Set_File_URL_Content_brick',
            url,
            mimeType ?? 'text/plain'
        );
        Transaction.process($, transaction).then((executed) => {
            setFile(executed ? CloudObject.get(file) : file);
            forwardEvent();
        }).catch((message) => {
            setErrorFlow(ErrorFlow.create(`Set File Content: ${message}`, 1));
        });
    }
}

registerBrick('0186bb8b16cb1a4eed14', SetFileContentFromURL);
