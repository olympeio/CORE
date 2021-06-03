import CenterOrMiddle from '../../src/core/util/CenterOrMiddle.js';
import testEqual from "../helpers/testEqual.mjs";

describe('CenterOrMiddle brick', () => {
    it('should return the correct value', () => {
        const elementWidth = 200;
        const containerWidth = 800;
        const expectedValue = (containerWidth - elementWidth) / 2;
        testEqual(new CenterOrMiddle(), [containerWidth, elementWidth], [expectedValue]);
    });
});
