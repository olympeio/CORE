
import { ActionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Opens an URL in a separate tab or window depending on the environment.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| URL | String | The URL to open. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | Boolean | `true` if the URL was successfully opened. |

**/
export default class OpenURL extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} url
     * @param {function()} forwardEvent
     * @param {function(boolean)} setResult
     */
    onUpdate(context, [url], [forwardEvent, setResult]) {
        window.open(url) ? setResult(true) : setResult(false);
        forwardEvent()
    }
}

registerBrick('016755c484eeed3da5e5', OpenURL);
