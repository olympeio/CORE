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
import { ActionBrick, registerBrick, File as OFile, ErrorFlow } from 'olympe';
import { toBase64 } from 'helpers/binaryConverters';
import {getLogger} from 'logging';
import {isMimeTypeText} from '../net/utils/httpResponseHandlers';

export default class GetFileContent extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {File} file
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(string)} setContent
     */
    async update(context, [file], [forwardEvent, setErrorFlow, setContent]) {
        const logger = getLogger('Get File Content');

        if (!(file instanceof OFile)) {
            // warning for legacy usage of the brick, where string/ArrayBuffer was provided as input
            logger.warn(`${file} is not a valid file`);
            return;
        }

        const onFailure = (message) => {
            const errMsg = `Could not retrieve content of ${file}\n${message}`;
            logger.error(errMsg);
            setErrorFlow(ErrorFlow.create(errMsg, 1));
        };

        const mimeType = file.get(OFile.mimeTypeProp) ?? '';
        try {
            if (isMimeTypeText(mimeType)) {
                const content = await file.getContentAsString();
                setContent(content);
                forwardEvent();
            } else {
                const content = await file.getContentAsBinary();
                setContent(toBase64(content));
                forwardEvent();
            }
        } catch (error) {
            onFailure(error.message);
        }
        
    }
}

registerBrick('0179e54f2f4c25c47003', GetFileContent);
