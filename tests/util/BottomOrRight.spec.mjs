import testEqual from "../helpers/testEqual.mjs";
import BottomOrRight from "../../src/core/util/BottomOrRight.js";

describe('BottomOrRight brick', () => {
    it('should return the correct value', () => {
        const elementWidth = 200;
        const containerWidth = 800;
        const expectedResult = containerWidth - elementWidth;
        testEqual(new BottomOrRight(), [containerWidth, elementWidth], [expectedResult]);
    });
});
