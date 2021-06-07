import { FunctionBrick, registerBrick } from 'olympe';
import { add } from 'date-fns'

export default class DateTimeAdd extends FunctionBrick {

    /**
     * Executed every time an input (date, years, months, days, weeks, hours, minutes, seconds) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {Date} date
     * @param {number} years
     * @param {number} months
     * @param {number} days
     * @param {number} weeks
     * @param {number} hours
     * @param {number} minutes
     * @param {number} seconds
     * @param {function(Date)} setNewDate
     */
    onUpdate(context, [date, years, months, days, weeks, hours, minutes, seconds], [setNewDate]) {
        setNewDate(add(date, {
            'years': years,
            'months': months,
            'weeks': weeks,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }));
    }
}

registerBrick('01783b82c11991d09ae9', DateTimeAdd);
