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

import Base64Encoder from '../../src/core/text/Base64Encoder.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Base64Encoder brick', () => {
    it('should correctly encode a binary value', () => {
        const b64= 'VIn/APoy';
        const bin = [ 0x54, 0x89, 0xff, 0x00, 0xfa, 0x32 ].reduce((str, byte) => str + String.fromCodePoint(byte), '');
        testEqual(new Base64Encoder(), [bin, 'bin'], [b64]);
    });
    it('should correctly encode a text value', () => {
        const b64 = 'VGhpcyBpcyBhIHRlc3QuIEhlcmUgYXJlIHNvbWUgZnVubnkgY2hhcmFjdGVycyDDqSIqw6d7POKCrNCo44GC24/XkOawtA==';
        const text = 'This is a test. Here are some funny characters é"*ç{<€Шあۏא水';
        testEqual(new Base64Encoder(), [text, 'utf8'], [b64]);
    });
});
