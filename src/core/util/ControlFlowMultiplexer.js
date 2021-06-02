import { FunctionBrick, registerBrick } from 'olympe';

/**
## Description
Creates a new control flow by joining two different control flows. The resulting flow is triggered whenever
one of the two joined flows is triggered.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Control flow 1 | Control Flow | The first control flow to join. |
| Control flow 2 | Control Flow | The second control flow to join. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Output control flow | Control Flow | The resulting control flow. |

**/
export default class ControlFlowMultiplexer extends FunctionBrick {

    /**
     * @override
     */
    configCoreUpdate(context, runUpdate, clear) {
        this.listenToAnyInput(context).subscribe(([_, value]) => {
            if (value) {
                // Run function each time one of the 2 input is triggered
                runUpdate([value]);
            } else {
                clear();
            }
        });
    }

    /**
     * @protected
     * @param {!Context} context
     * @param {number} incomingEvent
     * @param {function(number)} forwardEvent
     */
    onUpdate(context, [incomingEvent], [forwardEvent]) {
        forwardEvent(Date.now());
    }
}

registerBrick('016ab6f2396da4eb386f', ControlFlowMultiplexer);
