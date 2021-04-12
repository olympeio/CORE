import Plus from '../../src/core/math/Plus.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Plus brick', () => {
    it('should add correctly', () => {
        const p = new Plus();
        testEqual(p, [1, 2], [3]);
        testEqual(p, [1, -2], [-1]);
        testEqual(p, [1, NaN], [NaN]);
    })
})
