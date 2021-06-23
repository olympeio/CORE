import { FunctionBrick, registerBrick } from 'olympe';
import { isAfter, isEqual } from 'date-fns'

/**
## Description
Returns true if the datetime object is after another datetime object, false otherwise.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Date to compare | Date/Time | The date we want to know if it is after another date. |
| Comparison date| Date/Time | The reference date. |
| Strictly | Boolean | To choose if two equals dates should return true, or not. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Is date after | Date/Time | The result. |

**/
export default class IsDateTimeAfter extends FunctionBrick {

    /**
     * Executed every time an input (dateToCompare, comparisonDate, strictly) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {Date} dateToCompare
     * @param {Date} comparisonDate
     * @param {boolean} strictly
     * @param {function(boolean)} setIsDateAfter
     */
    onUpdate(context, [dateToCompare, comparisonDate, strictly], [setIsDateAfter]) {
        const strictCompare = isAfter(dateToCompare, comparisonDate);
        if (strictly) {
            setIsDateAfter(strictCompare);
        } else {
            setIsDateAfter(strictCompare || isEqual(dateToCompare, comparisonDate));
        }
    }
}

registerBrick('01783b830eb52a7e2ddf', IsDateTimeAfter);
