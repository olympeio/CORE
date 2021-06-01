import TopOrLeft from '../../src/core/util/TopOrLeft.js';
import testEqual from "../helpers/testEqual.mjs";

describe('TopOrLeft brick', () => {
    it('should return the correct value', () => {
        testEqual(new TopOrLeft(), [], [0]);
    });
});
