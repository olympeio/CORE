import {Brick, ErrorFlow} from 'olympe';

/**
 * @param {BrickContext} $
 * @param {!Brick} lambda lambda to be executed
 * @param {!Array<*>} inputsValues input values except for control flow, in order of the function signature.
 * @param {number=} customErrorCode
 * @return {Promise<!Array<*>>}
 */
export const executeLambda = ($, lambda, inputsValues, customErrorCode) => {
    if (!(lambda instanceof Brick)) {
        const errorMsg = `The lambda you try to execute is not a Brick`;
        return Promise.reject(errorMsg);
    }
    const inputs = lambda.getInputs();
    // get first input that should be a control flow
    const controlFlowIn = inputs.shift();
    // remove control flows and error flows (they have to be first two)
    const [controlFlowOut, errorFlowOut, ...outputs] = lambda.getOutputs();

    if (inputs.length !== inputsValues.length) {
        const errorMsg = `Inputs provided to the lambda: ${inputsValues.length}, but expected ${inputs.length} from function signature
        , values: ${JSON.stringify(inputsValues)}`;
        return Promise.reject(errorMsg);
    }
    const runner = $.runner(lambda);
    for (const [idx, inputSignature] of inputs.entries()) {
        runner.set(inputSignature, inputsValues[idx]);
    }
    runner.trigger(controlFlowIn);
    return Promise.race([
        runner.waitFor(controlFlowOut),
        runner.waitFor(errorFlowOut),
    ]).then((outputFlow) => {
        if (outputFlow instanceof ErrorFlow) {
            const error = typeof customErrorCode === 'number' ? ErrorFlow.create(outputFlow.getMessage(), customErrorCode) : outputFlow;
            throw error;
        } else {
            const resultArray = [];
            for (const outputTag of outputs) {
                resultArray.push(runner.get(outputTag));
            }
            return resultArray;
        }
    })
        .finally(() => runner.destroy());
}
