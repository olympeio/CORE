import { FunctionBrick, registerBrick } from 'olympe';
import { isValid } from 'date-fns'

/**
## Description
Returns true if the datetime object is a valid datetime, false otherwise.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Date | Date/Time | The datetime to verify. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Is valid | Date/Time | True if the datetime is valid, false otherwise. |

**/
export default class IsDateTimeValid extends FunctionBrick {

    /**
     * Executed every time an input (date) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {Date} date
     * @param {function(boolean)} setIsValid
     */
    onUpdate(context, [date], [setIsValid]) {
        setIsValid(isValid(date));
    }
}

registerBrick('01783b83f00e0b88dc79', IsDateTimeValid);
