import { FunctionBrick, registerBrick } from 'olympe';

/**
## Description
This function switches between 2 data-flows based on the provided condition.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Condition | Boolean | The condition to test. |
| a | Object | The value to return on `true`. |
| b | Object | The value to return on `false`. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Condition ? a : b | Object | a if Condition is `true`, b otherwise. |

**/
export default class If extends FunctionBrick {

    /**
     * @override
     */
    setupUpdate(context, runUpdate, clear) {
        const values = [null, null, null];
        this.getInputs().forEach((input, index) => {
            context.observe(input, true).subscribe((value) => {
                values[index] = value;

                if (value !== null) {
                    runUpdate(values);
                } else {
                    clear();
                }
            });
        });
    }

    /**
     * @param {!Context} context
     * @param {?boolean} cond
     * @param {*} a
     * @param {*} b
     * @param {function(*)} setResult
     */
    onUpdate(context, [cond, a, b], [setResult]) {
        if (cond !== null) {
            setResult(cond ? a : b);
        }
    }
}

registerBrick('01633eaa139d1f5e2fc4', If);

