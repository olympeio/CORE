import Minus from '../../src/core/math/Minus.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Minus brick', () => {
    it('should subtract correctly', () => {
        const m = new Minus();
        testEqual(m, [3, 1], [2]);
        testEqual(m, [1, -2], [3]);
        testEqual(m, [1, NaN], [NaN]);
    })
});
