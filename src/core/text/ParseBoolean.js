
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Attempts to parse the provided string to convert it into a boolean value.
I.E. If the string is 'true' (case-insensitive match), then it returns `true`, otherwise `false`.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s | String | The string to convert. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| boolean | Boolean | The result of the conversion. |

**/
export default class ParseBoolean extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} s
     * @param {function(boolean)} setBoolean
     */
    onUpdate(context, [s], [setBoolean]) {
        setBoolean(String(s).toLowerCase() === "true");
    }
}

registerBrick('01633f1440e8af58e199', ParseBoolean);
