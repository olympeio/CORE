
import { FunctionBrick, registerBrick } from 'olympe';

/**
## Description
Performs the named mathematical function.
**Example**:
```
Math('acos', 0.5) -> 1.0471975511965979
Math('log', 10) -> 2.302585092994046
```

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| functionName | String | The name of the mathematical function to perform. |
| input | Number | The input value. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | Number | The result. |

**/
export default class MathFunctions extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} functionName
     * @param {number} input
     * @param {function(number)} setResult
     */
    onUpdate(context, [functionName, input], [setResult]) {
        const func = Math[functionName];

        if (!func) {
            console.error(`[MathFunctions] unknown function ${functionName}!`);
        } else if (func.length !== 1) {
            console.error(`[MathFunctions] ${functionName} is not a single param function!`);
        } else if (typeof input !== 'number') {
            console.error(`[MathFunctions] Input is not a number!`);
        } else {
            setResult(func(input));
        }
    }
}

registerBrick('016326a54b2c1837bdda', MathFunctions);
