import { Context } from 'olympe';
export default function testResults(brick, inputs, expectedOutputsFunctions) {
    brick.onUpdate(new Context(), inputs, expectedOutputsFunctions);
}
