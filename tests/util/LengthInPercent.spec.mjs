import LengthInPercent from '../../src/core/util/LengthInPercent.js';
import testEqual from "../helpers/testEqual.mjs";

describe('LengthInPercent brick', () => {
    it('should return the correct value', () => {
        const percent = 20;
        const containerLength = 1000;
        const expectedValue = containerLength * percent / 100;
        testEqual(new LengthInPercent(), [percent, containerLength], [expectedValue]);
    });
});
