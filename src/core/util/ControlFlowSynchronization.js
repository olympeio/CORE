
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Dispatches a control flow whenever one of the two input gets triggered, after they both have been triggered at least once.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Control flow 1 | ControlFlow | First input flow. |
| Control flow 1 | ControlFlow | Second input flow. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Output flow | ControlFlow | Synchronized out put flow. |

**/
export default class Controlflowsynchronization extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} incomingEvent_1
     * @param {number} incomingEvent_2
     * @param {function(number)} forwardEvent
     */
    onUpdate(context, [incomingEvent_1, incomingEvent_2], [forwardEvent]) {
        forwardEvent(Date.now());
    }
}

registerBrick('016bd5eed74159ea8218', Controlflowsynchronization);
