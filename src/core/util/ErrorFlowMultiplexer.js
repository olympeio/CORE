import { FunctionBrick, registerBrick } from 'olympe';

/**
## Description
Creates a new error flow by joining up to 4 error flows. The resulting flow is triggered whenever
one of the two joined flows is triggered.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Error flow 1 | Error Flow | The first error flow to join. |
| Error flow 2 | Error Flow | The second error flow to join. |
| Error flow 3 | Error Flow | The third error flow to join. |
| Error flow 4 | Error Flow | The fourth error flow to join. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Error Flow | Error Flow | The resulting error flow. |

**/
export default class ErrorFlowMultiplexer extends FunctionBrick {

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
     * @param {!ErrorFlow} incomingEvent
     * @param {function(ErrorFlow)} forwardError
     */
    onUpdate(context, [errorFlow], [forwardError]) {
        forwardError(errorFlow);
    }
}

registerBrick('016eeb5ede9f3094d910', ErrorFlowMultiplexer);
