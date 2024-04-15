import {Brick, registerBrick, Config} from 'olympe';
import {map} from 'rxjs/operators';

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
     * @param {string} parameterName
     * @param {function()} setParamExists
     * @param {function()} setParamNotExists
     */
    update($, [parameterName], [setParamExists, setParamNotExists]) {
        // // Retrieve the parameter value from the configuration
        const parameterValue = Config.getParameter(parameterName);

        if (parameterValue !== null && parameterValue !== undefined) {
            setParamExists();
        } else {
            setParamNotExists();
        }
    }
}

registerBrick('018edf7bc99f1785838a', CheckParameter);
