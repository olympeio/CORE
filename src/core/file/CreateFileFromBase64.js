
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
