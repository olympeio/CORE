import Or from '../../src/core/logic/Or.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Or brick', () => {
    it('should transform correctly', () => {
        const o = new Or();
        testEqual(o, [true, true], [true]);
        testEqual(o, [true, false], [true]);
        testEqual(o, [false, true], [true]);
        testEqual(o, [false, false], [false]);
    })
})
