import { ActionBrick, registerBrick, Context, File } from 'olympe';
import { toBase64 } from '../_helpers/binaryConverters';

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

        if(file === undefined || file === null || file.getContentAsBinary === undefined) {
            // warning for legacy usage of the brick, where string/ArrayBuffer was provided as input
            console.warn('GetFileContent:', file, 'is not a valid file');
            return;
        }

        const onFailure = (message) => {
            console.error('GetFileContent: could not retrieve content of', file, '\n', message);
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
