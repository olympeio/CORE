import { FunctionBrick, registerBrick } from 'olympe';

/**
## Description
Trigger the `true` or `false` control flow depending on `condition`.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| condition | Boolean | The condition. |
| control flow | Control Flow | The triggering control flow. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| true flow | Control Flow | The control flow to trigger when condition is `true`. |
| false flow | Control Flow | The control flow to trigger when condition is `false`. |

**/
export default class Branch extends FunctionBrick {

    /**
     * @override
     */
    configCoreUpdate(context, runUpdate, clear) {
        const [incomingEvent, inputCondition] = this.getInputs();

        let condition = false;
        this.listenToInput(inputCondition, context).subscribe((inputValue) => {
            condition = inputValue !== undefined && inputValue !== null ? Boolean(inputValue) : false;
        });

        // Run runCoreUpdate only when incoming event is triggered.
        this.listenToInput(incomingEvent, context).subscribe((timestamp) => {
            if (timestamp) {
                // Execute the action only if the control flow has a value.
                runUpdate([condition]);
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
     * @param {boolean} condition
     * @param {function(number)} trueDispatcher
     * @param {function(number)} falseDispatcher
     */
    onUpdate(context, [condition], [trueDispatcher, falseDispatcher]) {
        condition ? trueDispatcher(Date.now()) : falseDispatcher(Date.now());
    }
}

registerBrick('01633fd9f28ce400a0a1', Branch);
