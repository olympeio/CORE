import { FunctionBrick, registerBrick } from 'olympe';
import { isValid } from 'date-fns'

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
