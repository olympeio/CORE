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

import EncodeURIComponent from '../../src/core/net/EncodeURIComponent.js';
import testEqual from '../helpers/testEqual.mjs';

describe('EncodeURIComponent brick', () => {
    it('should encode correctly', () => {
        // From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
        testEqual(new EncodeURIComponent(), [';,/?:@&=+$', true], ['%3B%2C%2F%3F%3A%40%26%3D%2B%24']);
        testEqual(new EncodeURIComponent(), ['-_.!~*\'()', true], ['-_.!~*\'()']);
        testEqual(new EncodeURIComponent(), ['#', true], ['%23']);
        testEqual(new EncodeURIComponent(), ['ABC abc 123', true], ['ABC%20abc%20123']);
        testEqual(new EncodeURIComponent(), [';,/?:@&=+$', false], [';,/?:@&=+$']);
        testEqual(new EncodeURIComponent(), ['-_.!~*\'()', false], ['-_.!~*\'()']);
        testEqual(new EncodeURIComponent(), ['#', false], ['#']);
        testEqual(new EncodeURIComponent(), ['ABC abc 123', false], ['ABC%20abc%20123']);
    });
});
