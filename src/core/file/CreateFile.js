
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

import { ActionBrick, registerBrick, Transaction, File, ErrorFlow, CloudObject } from 'olympe';
import {stringToBinary} from 'helpers/binaryConverters';

export default class CreateFile extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {string=} fileName
     * @param {string=} mimeType
     * @param {string} content
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(!File)} setFile
     */
    update($, [fileName, mimeType, content], [forwardEvent, setErrorFlow, setFile]) {
        const transaction = new Transaction();

        if (typeof content !== 'string' && !(content instanceof ArrayBuffer)) {
            setErrorFlow(ErrorFlow.create('Only support String or ArrayBuffer content types', 2));
            return;
        }

        const fileTag = File.createFromContent(
            transaction,
            fileName || 'new_File_from_CreateFile_brick',
            content instanceof ArrayBuffer ? content : stringToBinary(content),
            mimeType || 'text/plain'
        );
        transaction.persistInstance(fileTag, false);
        transaction.execute()
            .then(() => {
                setFile(CloudObject.get(fileTag));
                forwardEvent();
            })
            .catch(message => setErrorFlow(ErrorFlow.create(message, 1)));
    }
}

registerBrick('0177920f48b23cd01af7', CreateFile);
