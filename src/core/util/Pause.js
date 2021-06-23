import { ActionBrick, registerBrick } from 'olympe';

/**
## Description
Pauses a control flow for a specified amount of time. This helps creating delayed actions.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| duration | Number | Duration, in seconds. |

**/
export default class Pause extends ActionBrick {

    /**
     * The label used as key to save the timeout id
     *
     * @return {string}
     */
    static get timeout() { return 'TIMEOUT'; }

    /**
     * @override
     */
    onDestroy(context) {
        const timeout = context.get(Pause.timeout);
        timeout && clearTimeout(timeout);
    }

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} duration
     * @param {function()} forwardEvent
     */
    onUpdate(context, [duration], [forwardEvent]) {
        const SECOND = 1000;

        // Clear potential previous timeout
        let timeout = context.get(Pause.timeout);
        timeout && clearTimeout(timeout);

        // Create a new timeout function
        timeout = setTimeout(forwardEvent, (duration || 0) * SECOND);
        context.set(Pause.timeout, timeout);
    }
}

registerBrick('0162ce4b6d50ec186157', Pause);
