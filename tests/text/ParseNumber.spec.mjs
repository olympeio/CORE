import ParseNumber from '../../src/core/text/ParseNumber.js';
import testEqual from "../helpers/testEqual.mjs";

describe('ParseNumber brick', () => {
    it('should parse a string to a number correctly', () => {
        testEqual(new ParseNumber(), [''], [Number.NaN]);
        testEqual(new ParseNumber(), ['WTF?'], [Number.NaN]);
        testEqual(new ParseNumber(), ['3'], [3]);
        testEqual(new ParseNumber(), ['-4'], [-4]);
        testEqual(new ParseNumber(), ['3.14'], [3.14]);
        testEqual(new ParseNumber(), ['-1.5'], [-1.5]);
    });
});
