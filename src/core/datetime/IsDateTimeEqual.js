import { FunctionBrick, registerBrick } from 'olympe';
import { isEqual } from 'date-fns'

/**
## Description
Returns true if the datetime object equals another datetime object, false otherwise.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Date to compare | Date/Time | The date we want to know if it is equals to another date. |
| Comparison date | Date/Time | The reference date. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Are equals | Date/Time | The result. |

**/
export default class IsDateTimeEqual extends FunctionBrick {

    /**
     * Executed every time an input (dateToCompare, comparisonDate) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {Date} dateToCompare
     * @param {Date} comparisonDate
     * @param {function(boolean)} setIsEqual
     */
    onUpdate(context, [dateToCompare, comparisonDate], [setIsEqual]) {
        setIsEqual(isEqual(dateToCompare, comparisonDate));
    }
}

registerBrick('01783b83d0a24b160fa9', IsDateTimeEqual);
