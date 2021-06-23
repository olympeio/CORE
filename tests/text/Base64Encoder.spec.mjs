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
