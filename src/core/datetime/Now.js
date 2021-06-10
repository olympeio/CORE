
import { FunctionBrick, registerBrick } from 'olympe';

/**
## Description
Provides a data-flow containing the current date & time that will be updated every specified interval.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| interval | Number | The interval, in milliseconds between updates. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| datetime flow | DateTime | The current date & time. |

**/
export default class Now extends FunctionBrick {

    /**
     * The label used as key to save the interval id
     *
     * @return {string}
     */
    static get interval() { return 'INTERVAL'; }

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} interval
     * @param {function(Date)} setDate
     */
    onUpdate(context, [interval], [setDate]) {

        // Clear potential previous timeout
        let intervalID = context.get(Now.interval);
        intervalID && clearTimeout(intervalID);

        // Create a new timeout function
        intervalID = setInterval(() => setDate(new Date()), interval);
        context.set(Now.interval, intervalID);
    }

    /**
     * @override
     */
    onDestroy(context) {
        const intervalID = context.get(Now.interval);
        intervalID && clearInterval(intervalID);
    }
}

registerBrick('0166edbb9f8ab36de44c', Now);
