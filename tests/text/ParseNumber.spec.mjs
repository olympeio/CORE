/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
