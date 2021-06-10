
import { FunctionBrick, registerBrick } from 'olympe';
import { format } from 'date-fns';

/**
## Description
Converts a `DateTime` into a string by applying a format.
The format string is very flexible as it takes a string of tokens and replaces them with their corresponding values.

See https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table for the full list of tokens.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| datetime | DateTime | The date and time to format. |
| format | String | The format to apply (see above). |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| formatted datetime | String | The resulting string. |

**/
export default class FormatDateTime extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {Date} datetime
     * @param {string} formatString
     * @param {function(string)} setFormatedDatetime
     */
    onUpdate(context, [datetime, formatString], [setFormatedDatetime]) {
        setFormatedDatetime(format(datetime, formatString));
    }
}

registerBrick('0166f483d61cf87db282', FormatDateTime);
