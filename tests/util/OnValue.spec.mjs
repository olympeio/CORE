import OnValue from '../../src/core/util/OnValue.js';
import testEqual from '../helpers/testEqual.mjs';

describe('On Value brick', () => {
    it('should forward any value given as input and emit event', () => {
        const onValue = new OnValue();
        testEqual(onValue, [2], [2], 0);
        testEqual(onValue, [null], [null], 0);
    });
});
