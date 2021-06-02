
import { ActionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Downloads a file and save it locally.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| File | File | The file to download. |
| Name | String | The name for the save file. |

**/
export default class DownloadFile extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} name
     * @param {File} file
     * @param {function()} forwardEvent
     */
    onUpdate(context, [name, file], [forwardEvent]) {
        file.saveAs(name || file.getProperty(File.nameProp));
        forwardEvent();
    }
}

registerBrick('0165a8c453cf0bfb25f3', DownloadFile);
