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

import Contains from '../../src/core/text/Contains.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Contains brick', () => {
    it('should test correctly', () => {
        const c = new Contains();
        testEqual(c, ['Hello World', 'World'], [true]);
        testEqual(c, ['Hello World', 'Foo'], [false]);
        testEqual(c, ['', 'Foo'], [false]);
        testEqual(c, ['Foo', ''], [true]);
    });
    it('should convert automatically', () => {
        const c = new Contains();
        testEqual(c, [123, '2'], [true]);
        testEqual(c, ['Hello', 1], [false]);
        testEqual(c, [123, 2], [true]);
        testEqual(c, [true, 'Hello'], [false]);
        testEqual(c, [true, false], [false]);
        testEqual(c, [false, false], [true]);
        testEqual(c, ['It is true', true], [true]);
    });
});
