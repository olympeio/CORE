import And from '../../src/core/logic/And.js';
import testEqual from '../helpers/testEqual.mjs';

describe('And brick', () => {
    it('should transform correctly', () => {
        const a = new And();
        testEqual(a, [true, true], [true]);
        testEqual(a, [true, false], [false]);
        testEqual(a, [false, true], [false]);
        testEqual(a, [false, false], [false]);
    })
})
