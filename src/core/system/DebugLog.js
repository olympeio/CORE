
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Outputs the provided value on the console, it can be any JS object that has a string representation.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| prefix | String | A label to put in front of the message. |
| value | Object | The value to display. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| value | Object | The object that was passed in. |

**/
export default class DebugLog extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} prefix
     * @param {*} value
     * @param {function(*)} setValue
     */
    onUpdate(context, [prefix, value], [setValue]) {
        console.log((prefix ? prefix + ': ' : '') + String(value));
        setValue(value);
    }
}

registerBrick('016324e7338307c3ed94', DebugLog);
