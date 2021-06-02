import ToString from '../../src/core/text/ToString.js';
import testEqual from '../helpers/testEqual.mjs';

describe('ToString brick', () => {
    it('should correctly parse null', () => {
        testEqual(new ToString(), [null], ['null']);
    });
    it('should correctly parse undefined', () => {
        testEqual(new ToString(), [undefined], ['undefined']);
    });
    it('should correctly parse a number', () => {
        const func = new ToString();
        testEqual(func, [4], ['4']);
        testEqual(func, [NaN], ['NaN']);
    });
    it('should correctly parse a boolean', () => {
        testEqual(new ToString(), [false], ['false']);
    });
    it('should correctly parse an array', () => {
        const func = new ToString();
        testEqual(func, [[]], ['']);
        testEqual(func, [[42]], ['42']);
        testEqual(func, [[42, 'toto', true]], ['42,toto,true']);
    });
    it('should correctly parse an object without a toString method', () => {
        testEqual(new ToString(), [{}], ['[object Object]']);
    });
    it('should correctly parse an object with a toString method', () => {
        testEqual(new ToString(), [{ toString() { return 'toto';}}], ['toto']);
    });
});
