import { Context } from 'olympe';
export default function testEqual(brick, inputs, expectedOutputs) {
    const outputs = [];
    for (const v of expectedOutputs) {
        outputs.push((out) => {
            expect(out).toEqual(v);
        });
    }
    brick.onUpdate(new Context(), inputs, outputs);
};
