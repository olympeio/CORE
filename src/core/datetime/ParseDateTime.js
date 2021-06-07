
import { FunctionBrick, registerBrick, Context } from 'olympe';
import { parse, parseISO } from 'date-fns';

/**
## Description
Converts a string to a datetime using provided format
https://momentjs.com/docs/#/parsing/string-format/

**Examples:**

  - "2010-10-20 4:30",       "YYYY-MM-DD HH:mm"
  - "2010-10-20 4:30 +0000", "YYYY-MM-DD HH:mm Z"

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| dateTimeString | String | dateTime as a String |
| format | String | format |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| date | DateTime | The result of the conversion. |

**/
export default class ParseDateTime extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} dateTimeString
     * @param {string} format
     * @param {function(Date)} setDate
     */
    onUpdate(context, [dateTimeString, format], [setDate]) {
        if (!format) {
            setDate(parseISO(dateTimeString));
        } else {
            setDate(parse(dateTimeString, format, new Date()));
        }

    }
}

registerBrick('01717d4924328261f7f9', ParseDateTime);
