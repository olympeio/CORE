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
import {getLogger} from 'logging';

export default class GetBinaryFileContent extends ActionBrick {

    /**
     * @protected
     * @param {Context} context
     * @param {File} file
     * @param {function()} forwardEvent
     * @param {function(ArrayBuffer)} setContent
     */
    onUpdate(context, [file], [forwardEvent, setContent]) {
        const logger = getLogger('Get Binary File Content');

        if (file === undefined || file === null || file.getContentAsBinary === undefined) {
            // warning for legacy usage of the brick, where string/ArrayBuffer was provided as input
            logger.warn(`${file} is not a valid file`);
            return;
        }

        file.getContentAsBinary(
            (content) => {
                setContent(content);
                forwardEvent();
            },
            (message) => {
                logger.error(`Could not retrieve content of ${file}\n${message}`);
            }
        );
    }
}

registerBrick('017bc1f1e7a4ea79e31d', GetBinaryFileContent);
