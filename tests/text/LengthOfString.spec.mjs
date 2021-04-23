import LengthOfString from '../../src/core/text/LengthOfString.js';
import testEqual from '../helpers/testEqual.mjs';

describe('LengthOfString brick', () => {
    it('should get Length', () => {
        const l = new LengthOfString();
        testEqual(l, ['Hello'], [5]);
        testEqual(l, [''], [0]);
    });
    it('should convert automatically', () => {
        const l = new LengthOfString();
        testEqual(l, [123], [3]);
        testEqual(l, [true], [4]);
    });
});
