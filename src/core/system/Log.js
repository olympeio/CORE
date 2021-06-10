
import { ActionBrick, registerBrick } from 'olympe';

/**
## Description
Outputs a message on the console.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| prefix | String | A label to put in front of the message. |
| message | String | The message to display. |

**/
export default class Log extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} prefix
     * @param {string} message
     * @param {function()} forwardEvent
     */
    onUpdate(context, [prefix, message], [forwardEvent]) {
        console.log((prefix ? prefix + ': ' : '') + message);
        forwardEvent();
    }
}

registerBrick('0162afedd7acb5c5451a', Log);
