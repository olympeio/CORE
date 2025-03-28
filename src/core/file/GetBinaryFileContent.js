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
import { Brick, registerBrick, File as OFile, ErrorFlow } from 'olympe';
import {getLogger} from 'logging';

export default class GetBinaryFileContent extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {File} file
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(ArrayBuffer)} setContent
     */
    async update(context, [file], [forwardEvent, setErrorFlow, setContent]) {
        const logger = getLogger('Get Binary File Content');

        if (!(file instanceof OFile)) {
            // warning for legacy usage of the brick, where string/ArrayBuffer was provided as input
            logger.warn(`${file} is not a valid file`);
            return;
        }

        try {
            const content = await file.getContentAsBinary();
            setContent(content);
            forwardEvent();
        } catch (error) {
            const errMsg = `Could not retrieve content of ${file}\n${message}`;
            logger.error(errMsg);
            setErrorFlow(ErrorFlow.create(errMsg, 1));
        }
    }
}

registerBrick('017bc1f1e7a4ea79e31d', GetBinaryFileContent);
