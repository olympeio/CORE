import IsNull from '../../../src/core/data/base/IsNull.js';
import testEqual from '../../helpers/testEqual.mjs';

describe('IsNull brick', () => {
    it('should return true when null or undefined is given', () => {
        const a = new IsNull();
        testEqual(a, [undefined], [true]);
        testEqual(a, [null], [true]);
    });
    it('should return false when an object or a value is given', () => {
        const a = new IsNull();
        testEqual(a, [''], [false]);
        testEqual(a, ['someObject'], [false]);
        testEqual(a, [0], [false]);
        testEqual(a, [false], [false]);
        testEqual(a, [[]], [false]);
        testEqual(a, [{'propA': 1}], [false])
        testEqual(a, [{}], [false])
    });
});
