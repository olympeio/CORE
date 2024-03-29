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
import {ActionBrick, ErrorFlow, registerBrick, File as OFile, Transaction, CloudObject} from 'olympe';
import {stringToBinary} from "helpers/binaryConverters";

export default class SetFileContent extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {File} file
     * @param {string} fileName
     * @param {string} mimeType
     * @param {string} content
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(File)} setFile
     */
    update($, [file, fileName, mimeType, content], [forwardEvent, setErrorFlow, setFile]) {
        // Guards
        if (typeof content !== 'string' && !(content instanceof ArrayBuffer)) {
            setErrorFlow(ErrorFlow.create('Only support String or ArrayBuffer content types', 2));
            return;
        }

        const transaction = Transaction.from($);
        OFile.setContent(
            transaction,
            file,
            fileName ?? 'File_from_Set_File_Content_brick',
            content instanceof ArrayBuffer ? content : stringToBinary(content),
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

registerBrick('0186bb8ab7bd8fa01d91', SetFileContent);
