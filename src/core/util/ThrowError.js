
import { FunctionBrick, registerBrick, ErrorFlow } from 'olympe';

/**
## Description
Throwing an error creates an error-flow which can be either caught or passed on to the output error-flow of the
action.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Message | String | The error message. |
| Code | Number | The error code. |
| Control Flow | Control FLow | The control flow used to trigger the error. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Error Flow | Error Flow | The created error flow. |

**/
export default class ThrowError extends FunctionBrick {

    /**
     * @override
     */
    configCoreUpdate(context, runUpdate, clear) {
        const [incomingEvent, inputMessage, inputCode] = this.getInputs();

        let message = '';
        this.listenToInput(inputMessage, context).subscribe((inputValue) => {
             message = inputValue !== undefined && inputValue !== null ? String(inputValue) : '';
        });

        let code = '';
        this.listenToInput(inputCode, context).subscribe((inputValue) => {
            code = inputValue !== undefined && inputValue !== null ? Number(inputValue) : 0;
        });

        // Run runCoreUpdate only when incoming event is triggered.
        this.listenToInput(incomingEvent, context).subscribe((timestamp) => {
            if (timestamp) {
                // Execute the action only if the control flow has a value.
                runUpdate([message, code]);
            } else {
                clear();
            }
        });
    }

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} message
     * @param {number} code
     * @param {function(ErrorFlow)} setErrorFlow
     */
    onUpdate(context, [message, code], [setErrorFlow]) {
        setErrorFlow(ErrorFlow.create(message, code));
    }
}

registerBrick('016eeb5ede9f3094d8fa', ThrowError);
