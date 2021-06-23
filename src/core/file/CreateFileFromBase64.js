
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
