/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { ActionBrick, registerBrick, File } from 'olympe';
import { toBase64 } from 'helpers/binaryConverters';
import {getLogger} from 'logging';

/**
 ## Description
 Get the file content, as a plain string for mime types text/* and application/json. For other mimetypes, a string encoded in base64 is returned.
 ## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | File | File |  |
 ## Outputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | Content | String |  |
**/
export default class GetFileContent extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {File} file
     * @param {function()} forwardEvent
     * @param {function(Object)} setContent
     */
    onUpdate(context, [file], [forwardEvent, setContent]) {
        const logger = getLogger('Concat List');

        if(file === undefined || file === null || file.getContentAsBinary === undefined) {
            // warning for legacy usage of the brick, where string/ArrayBuffer was provided as input
            logger.warn(`${file} is not a valid file`);
            return;
        }

        const onFailure = (message) => {
            logger.error('Could not retrieve content of', file, '\n', message);
        };

        const mimeType = file.getProperty(File.mimeTypeProp) || '';
        const asText = (mimeType.startsWith('text') || mimeType === 'application/json')
        if(asText) {
            file.getContentAsString((content) => {
                setContent(content);
                forwardEvent();
            }, onFailure);
        } else {
            file.getContentAsBinary(
                (content) => {
                    setContent(toBase64(content));
                    forwardEvent();
                },
                onFailure
            );
        }
    }
}

registerBrick('0179e54f2f4c25c47003', GetFileContent);
