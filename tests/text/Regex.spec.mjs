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

import Regex from '../../src/core/text/Regex.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Regex brick', () => {
    it('should return false and an empty array if there is no match', () => {
        const func = new Regex();
        testEqual(func, ['totototatata', 'titi'], [false, []]);
        testEqual(func, ['toto', '(ta)+'], [false, []]);
        testEqual(func, ['1234', '[a-z]+'], [false, []]);
        testEqual(func, ['abcd', '[0-9]+'], [false, []]);
    });
    it('should return true and an array with all the matched elements if there is at least one match', () => {
        const func = new Regex();
        testEqual(func, ['totototatata', '(to)+'], [true, ['tototo','to']]);
        testEqual(func, ['totototatata', '(to|ta)+'], [true, ['totototatata', 'ta']]);
        testEqual(func, ['01/04/1987', '\\d\\d/\\d\\d/\\d{4}'], [true, ['01/04/1987']]);
        testEqual(func, ['tototatatototatatoto', 'toto'], [true, ['toto']]);
        testEqual(func, ['tototatatototatatoto', 'tata'], [true, ['tata']]);
        testEqual(func, ['tototatatototatatoto', '(to|ta)+'], [true, ['tototatatototatatoto', 'to']]);
        testEqual(func, ['My name is toto, I\'m 24 years old. How do you do?', 'My name is (.*), I\'m (.*) years old'], [true, ['My name is toto, I\'m 24 years old', 'toto', '24']]);
    });
});
