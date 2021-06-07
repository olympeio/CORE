
import { FunctionBrick, registerBrick, Context } from 'olympe';
import { addMilliseconds } from 'date-fns'

/**
## Description
Creates a new `DateTime` by adding an amount of time from the provided `DateTime`.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| datetime | DateTime | The initial `DateTime`. |
| duration | Number | The duration, in milliseconds, to add. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| datetime | DateTime | The resulting `DateTime`. |

**/
export default class DateTimePlusDeprecated extends FunctionBrick {

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
        setDatetime(addMilliseconds(datetime, duration));
    }
}

registerBrick('0166f7ef979027d32b21', DateTimePlusDeprecated);
