import ParseBoolean from '../../src/core/text/ParseBoolean.js';
import testEqual from "../helpers/testEqual.mjs";

describe('ParseBoolean brick', () => {
    it('should parse a string to a boolean correctly', () => {
        testEqual(new ParseBoolean(), ["false"], [false]);
        testEqual(new ParseBoolean(), ["WTF?"], [false]);
        testEqual(new ParseBoolean(), ["true"], [true]);
        testEqual(new ParseBoolean(), ["True"], [true]);
        testEqual(new ParseBoolean(), ["TRUE"], [true]);
    });
});
