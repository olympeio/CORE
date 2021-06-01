
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Sets a value to be used when the main data-flow is unresolved.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| value | Object | The data-flow. |
| default value | Object | The value to use by default. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| output value | Object | the out-going data flow. |

**/
export default class Defaultvalue extends FunctionBrick {

    /**
     * @override
     */
    configCoreUpdate(context, runUpdate, clear) {
        let defaultValue = null;
        let otherValue = null;

        const updated = () => {
            if (defaultValue !== undefined && defaultValue !== null) {
                // When the default value is cleared, no need to run the function.
                runUpdate([defaultValue, otherValue]);
            } else {
                clear();
            }
        };

        const [defaultValueInput, valueInput] = this.getInputs();
        this.listenToInput(defaultValueInput, context).subscribe((value) => {
            defaultValue = value;
            updated();
        });

        this.listenToInput(valueInput, context).subscribe((value) => {
            otherValue = value;
            updated();
        });
    }

    /**
     * @protected
     * @param {!Context} context
     * @param {!*} defaultValue
     * @param {!*} value
     * @param {function(!*)} setValue
     */
    onUpdate(context, [defaultValue, value], [setValue]) {
        setValue(value !== undefined && value !== null ? value : defaultValue);
    }
}

registerBrick('016ab6f231b7803c429a', Defaultvalue);
