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

import ToString from '../../src/core/text/ToString.js';
import testEqual from '../helpers/testEqual.mjs';

describe('ToString brick', () => {
    it('should correctly parse null', () => {
        testEqual(new ToString(), [null], ['null']);
    });
    it('should correctly parse undefined', () => {
        testEqual(new ToString(), [undefined], ['undefined']);
    });
    it('should correctly parse a number', () => {
        const func = new ToString();
        testEqual(func, [4], ['4']);
        testEqual(func, [NaN], ['NaN']);
    });
    it('should correctly parse a boolean', () => {
        testEqual(new ToString(), [false], ['false']);
    });
    it('should correctly parse an array', () => {
        const func = new ToString();
        testEqual(func, [[]], ['']);
        testEqual(func, [[42]], ['42']);
        testEqual(func, [[42, 'toto', true]], ['42,toto,true']);
    });
    it('should correctly parse an object without a toString method', () => {
        testEqual(new ToString(), [{}], ['[object Object]']);
    });
    it('should correctly parse an object with a toString method', () => {
        testEqual(new ToString(), [{ toString() { return 'toto';}}], ['toto']);
    });
});
