
import { FunctionBrick, registerBrick, Context, ErrorFlow } from 'olympe';

/**
 ## Description
 Catching an error from an error-flow allows you to access its details and trigger a control-flow every time an
 error is thrown.

 ## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | Error Flow | Error Flow | The error flow from which to catch errors. |
 ## Outputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | Message | String | The error message. |
 | Code | Number | The error code. |
 | Control Flow | Control FLow | The output control flow. |

 **/
export default class CatchErrors extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {ErrorFlow} errorFlow
     * @param {function(number)} forwardEvent
     * @param {function(string)} setMessage
     * @param {function(number)} setCode
     */
    onUpdate(context, [ errorFlow], [ forwardEvent, setMessage, setCode ]) {
        setMessage(errorFlow.getMessage());
        setCode(errorFlow.getCode());
        forwardEvent(Date.now());
    }
}

registerBrick('016eeb5ede9f3094d8f5', CatchErrors);
