import {Brick, registerBrick, Config} from 'olympe';
import {map} from 'rxjs/operators';
import { getLogger } from 'logging';

export default class CheckParameter extends Brick {
    /**
     * @override
     */
    setupExecution($) {
        const [inputFlow, paramName] = this.getInputs();
        return $.observe(inputFlow).pipe(
            map((timestamp) => {
                if (timestamp === null) {
                    // Clear the action only if the control flow has no value.
                    return null;
                }

                return [$.get(paramName)];
            })
        );
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} name
     * @param {function()} setParamExists
     * @param {function()} setNoParam
     * @param {function(*)} setParamValue
     */
    update($, [name], [setParamExists, setNoParam, setParamValue]) {
        if (typeof name !== 'string') {
            getLogger('CheckParameter').error(`Provided parameter name is not a string: ${name}`);
            return;
        }
        const parameterValue = Config.getParameter(name);

        if (parameterValue !== null && parameterValue !== undefined) {
            setParamValue(parameterValue);
            setParamExists();
        } else {
            setNoParam();
        }
    }
}

registerBrick('018edf7bc99f1785838a', CheckParameter);
