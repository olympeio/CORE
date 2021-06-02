import PadEndOfString from '../../src/core/text/PadEndOfString.js';
import testEqual from '../helpers/testEqual.mjs';

describe('PadEndOfString brick', () => {
    it('should return the same string if length is smaller than the string', () => {
        const func = new PadEndOfString();
        testEqual(func, ['toto', 0], ['toto']);
        testEqual(func, ['totototo', 4], ['totototo']);
    });
    it('should pad the string with space characters if the length is longer than the string', () => {
        const func = new PadEndOfString();
        testEqual(func, ['toto', 10], ['toto      ']);
        testEqual(func, ['totototo', 10], ['totototo  ']);
    });
});
