import { FunctionBrick, registerBrick } from 'olympe';
import { parse } from 'date-fns';

/**
## Description
Converts a string to a datetime using provided format
https://date-fns.org/v2.22.1/docs/parse

**Examples:**

  - "2010-10-20 4:30",       "yyyy-MM-dd H:mm"
  - "2010-02-20 4:30 +0000", "yyyy-MM-dd H:mm xx"

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
     * @param {string} formatInput
     * @param {function(Date)} setDate
     */
    onUpdate(context, [dateTimeString, formatInput], [setDate]) {
        const format = formatInput || "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
        try {
            setDate(parse(dateTimeString, format, new Date()));
        } catch (e) {
            console.error(e);
        }

    }
}

registerBrick('01717d4924328261f7f9', ParseDateTime);
