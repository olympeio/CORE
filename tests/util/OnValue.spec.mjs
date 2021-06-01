import OnValue from '../../src/core/util/OnValue.js';
import testEqual from '../helpers/testEqual.mjs';

import {Context} from 'olympe';

function testEventEmitted(brick, inputs, nOutputs) {
    const outputs = [];
    // add n mock output functions
    for(let i=0; i<nOutputs; i++) {
        outputs.push(() => { /* empty */ });
    }
    outputs.push((controlFlow) => {
        expect(controlFlow).toBeLessThanOrEqual(new Date().getTime());
    })
    brick.onUpdate(new Context(), inputs, outputs);
};

describe('On Value brick', () => {
    it('should emit an event when any value is received', () => {
        const onValue = new OnValue();
        testEventEmitted(onValue, [1], 1);
        testEventEmitted(onValue, [null], 1);
    });
    it('should forward any value given as input', () => {
        const onValue = new OnValue();
        testEqual(onValue, [2], [2]);
        testEqual(onValue, [null], [null]);
    });
});
