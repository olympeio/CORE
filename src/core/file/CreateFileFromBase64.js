
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

import { ActionBrick, registerBrick, ErrorFlow, File, Sync, Transaction } from 'olympe';

/**
## Description
Used e.g. with KSI files, in order to save a binary file in its base64 format.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| file name | String |  |
| mime type | String |  |
| base64 content | String |  |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| file | File |  |
## Errors
| Name | Description |
| --- | --- |
| Error Flow |  |

**/
export default class CreateFileFromBase64 extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string=} fileName
     * @param {string=} mimeType
     * @param {string} base64Content
     * @param {function(File)} setFile
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function()} forwardEvent
     */
    onUpdate(context, [fileName, mimeType, base64Content], [setFile, setErrorFlow, forwardEvent]) {
        const transaction = new Transaction();
        const fileTag = File.createFileFromURL(
            File,
            transaction,
            fileName || 'new_File_from_CreateFileFromBase64_brick',
            'data:' + mimeType + ';base64,' + base64Content,
            mimeType || 'text/plain'
        );
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

registerBrick('017821d939590a41cc82', CreateFileFromBase64);
