import IsNull from '../../../src/core/data/base/IsNull.js';
import testEqual from '../../helpers/testEqual.mjs';

xdescribe('Is_Null brick', () => {
    it('should return true when null', () => {
        const a = new IsNull();
        testEqual(a, [null], [true]);
        testEqual(a, [undefined], [true]);
    });

    it('should return false when not null', () => {
        const a = new IsNull();
        testEqual(a, [NaN], [false]);
        testEqual(a, [0], [false]);
        testEqual(a, [''], [false]);
        testEqual(a, ['test'], [false]);
    });
});
