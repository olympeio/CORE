/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Base64Decoder from '../../src/core/text/Base64Decoder.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Base64Decoder brick', () => {
    it('should correctly decode a binary value', () => {
        const b64= 'VIn/APoy';
        const bin = [ 0x54, 0x89, 0xff, 0x00, 0xfa, 0x32 ].reduce((str, byte) => str + String.fromCodePoint(byte), '');
        testEqual(new Base64Decoder(), [b64, 'bin'], [bin]);
    });
    it('should correctly decode a text value', () => {
        const b64 = 'VGhpcyBpcyBhIHRlc3QuIEhlcmUgYXJlIHNvbWUgZnVubnkgY2hhcmFjdGVycyDDqSIqw6d7POKCrNCo44GC24/XkOawtA==';
        const text = 'This is a test. Here are some funny characters é"*ç{<€Шあۏא水';
        testEqual(new Base64Decoder(), [b64, 'utf8'], [text]);
    });
    it('should correctly handle an invalid base64 string', () => {
        const func = new Base64Decoder();
        testEqual(func, ['Hello!', 'utf8'], ['Not a Base64 Input']);
        testEqual(func, ['Hello!', 'bin'], ['Not a Base64 Input']);
    });
});
