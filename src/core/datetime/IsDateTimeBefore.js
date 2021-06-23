import { FunctionBrick, registerBrick } from 'olympe';
import { isBefore, isEqual } from 'date-fns'

/**
## Description
Returns true if the datetime object is before another datetime object, false otherwise.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Date to compare | Date/Time | The date we want to know if it is before another date. |
| Comparison date | Date/Time | The reference date. |
| Strictly | Boolean | To choose if two equals dates should return true, or not. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Is date before | Date/Time | The result. |

**/
export default class IsDateTimeBefore extends FunctionBrick {

    /**
     * Executed every time an input (dateToCompare, comparisonDate, strictly) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {Date} dateToCompare
     * @param {Date} comparisonDate
     * @param {boolean} strictly
     * @param {function(boolean)} setIsDateBefore
     */
    onUpdate(context, [dateToCompare, comparisonDate, strictly], [setIsDateBefore]) {
        const strictCompare = isBefore(dateToCompare, comparisonDate);
        if (strictly) {
            setIsDateBefore(strictCompare);
        } else {
            setIsDateBefore(strictCompare || isEqual(dateToCompare, comparisonDate));
        }
    }
}

registerBrick('01783b8342bb01350425', IsDateTimeBefore);
