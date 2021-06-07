import { FunctionBrick, registerBrick } from 'olympe';
import { getYear, getMonth, getDate, getHours, getMinutes, getSeconds } from 'date-fns'

export default class GetDateTimeAttributes extends FunctionBrick {

    /**
     * Executed every time an input (date) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {Date} date
     * @param {function(number)} setYear
     * @param {function(number)} setMonthNatural
     * @param {function(number)} setDayOfTheMonth
     * @param {function(number)} setHour24format
     * @param {function(number)} setMinutes
     * @param {function(number)} setSeconds
     */
    onUpdate(context, [date], [setYear, setMonthNatural, setDayOfTheMonth, setHour24format, setMinutes, setSeconds]) {
        setYear(getYear(date));
        setMonthNatural(getMonth(date) + 1);
        setDayOfTheMonth(getDate(date));
        setHour24format(getHours(date));
        setMinutes(getMinutes(date));
        setSeconds(getSeconds(date));
    }
}

registerBrick('01783b83a0faa2f101f3', GetDateTimeAttributes);
