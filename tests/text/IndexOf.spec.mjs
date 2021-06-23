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

import IndexOf from '../../src/core/text/IndexOf.js';
import testEqual from '../helpers/testEqual.mjs';

describe('IndexOf brick', () => {
    it('should return -1 when the substring is not found', () => {
        const func = new IndexOf();
        testEqual(func, ['', 'toto'], [-1]);
        testEqual(func, ['titi', 'toto'], [-1]);
    });
    it('should return 0 when both string are identical', () => {
        const func = new IndexOf();
        testEqual(func, ['toto', 'toto'], [0]);
        testEqual(func, ['', ''], [0]);
    });
    it('should return 0 when the substring is an empty string', () => {
        const func = new IndexOf();
        testEqual(func, ['toto', ''], [0]);
    });
    it('should return the proper index when a valid substring is provided', () => {
        const func = new IndexOf();
        testEqual(func, ['totototo', 'to'], [0]);
        testEqual(func, ['tototata', 'ta'], [4]);
        testEqual(func, ['titatotu', 'ta'], [2]);
    });
});
