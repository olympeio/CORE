
import { ActionBrick, registerBrick, Context, Transaction, File, ErrorFlow, Sync } from 'olympe';

/**
 ## Description
 Create a file from a text content.
 ## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | file name | String |  |
 | mime type | String |  |
 | content | String |  |
 ## Outputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | file | File |  |
 ## Errors
 | Name | Description |
 | --- | --- |
 | Error Flow |  |
**/
export default class CreateFile extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string=} fileName
     * @param {string=} mimeType
     * @param {string} content
     * @param {function(File)} setFile
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function()} forwardEvent
     */
    onUpdate(context, [fileName, mimeType, content], [setFile, setErrorFlow, forwardEvent]) {
        const transaction = new Transaction();
        const fileTag = File.createFile(
            File,
            transaction,
            fileName || 'new_File_from_CreateFile_brick',
            content,
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

registerBrick('0177920f48b23cd01af7', CreateFile);
