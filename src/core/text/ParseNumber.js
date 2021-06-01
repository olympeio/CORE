
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Attempts to parse the provided string to convert it into a number value.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s | String | The string to convert. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| number | Number | The result of the conversion. |

**/
export default class ParseNumber extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} s
     * @param {function(number)} setNumber
     */
    onUpdate(context, [s], [setNumber]) {
        setNumber(Number.parseFloat(String(s)));
    }
}

registerBrick('01626c12dfcb3580121c', ParseNumber);
