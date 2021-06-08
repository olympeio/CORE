import { Context } from 'olympe';

/**
 * @param {Object} brick brick instance to test
 * @param {Array<*>} inputs input values against which to test
 * @param {Array<*>} expectedOutputs expected output values (without control flow)
 * @param {number=} controlFlowIndex index of the brick control flow output (if any)
 */
export const testEqual = (brick, inputs, expectedOutputs, controlFlowIndex) => {

    // Add output value testers
    const outputs = [];
    for (const value of expectedOutputs) {
        outputs.push((out) => {
            expect(out).toEqual(value);
        });
    }

    // If necessary, add control flow output tester
    if (controlFlowIndex !== undefined) {
        outputs.splice(controlFlowIndex, 0, (controlFlow) => {
            expect(controlFlow).toBeLessThanOrEqual(Date.now())
        });
    }

    brick.onUpdate(new Context(), inputs, outputs);
};

export default testEqual;
