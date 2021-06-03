
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Returns the string representation of the object.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| n | Object | The object to convert. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| string | String | The resulting string. |

**/
export default class ToString extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {Object} n
     * @param {function(string)} setString
     */
    onUpdate(context, [n], [setString]) {
        setString(String(n));
    }
}

registerBrick('01626cb3ca38d45646f8', ToString);
