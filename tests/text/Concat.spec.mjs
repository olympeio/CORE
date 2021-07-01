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

import Concat from '../../src/core/text/Concat.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Concat brick', () => {
    it('should concat correctly', () => {
        const c = new Concat();
        testEqual(c, ['Hello', 'World'], ['HelloWorld']);
        testEqual(c, ['', 'Foo'], ['Foo']);
        testEqual(c, ['Foo', ''], ['Foo']);
    });
    it('should convert automatically', () => {
        const c = new Concat();
        testEqual(c, [1, 'Hello'], ['1Hello']);
        testEqual(c, ['Hello', 1], ['Hello1']);
        testEqual(c, [1, 2], ['12']);
        testEqual(c, [true, 'Hello'], ['trueHello']);
        testEqual(c, [true, false], ['truefalse']);
        testEqual(c, [true, 1], ['true1']);
    });
});
