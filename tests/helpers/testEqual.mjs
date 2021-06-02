import { Context } from 'olympe';
export default function testEqual(brick, inputs, expectedOutputs) {
    const outputs = [];
    for (const v of expectedOutputs) {
        outputs.push((out) => {
            expect(out).toEqual(v);
        });
    }
    // add mock forwardEvent() for actions
    outputs.push(() => {});
    brick.onUpdate(new Context(), inputs, outputs);
};
