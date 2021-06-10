
import { FunctionBrick, registerBrick } from 'olympe';
import { subMilliseconds } from 'date-fns'

/**
## Description
Creates a new `DateTime` by subtracting an amount of time from the provided `DateTime`.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| datetime | DateTime | The initial `DateTime`. |
| duration | DateTime or Number | The duration to subtract. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| datetime | DateTime | The resulting `DateTime`. |

**/
export default class DateTimeMinusDeprecated extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {Date} datetime
     * @param {number} duration
     * @param {function(Date)} setDatetime
     */
    onUpdate(context, [datetime, duration], [setDatetime]) {
        setDatetime(subMilliseconds(datetime, duration));
    }
}

registerBrick('0166f7efa33f8a310dd6', DateTimeMinusDeprecated);
