import EncodeURIComponent from '../../src/core/net/EncodeURIComponent.js';
import testEqual from '../helpers/testEqual.mjs';

describe('EncodeURIComponent brick', () => {
    it('should encode correctly', () => {
        // From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
        testEqual(new EncodeURIComponent(), [';,/?:@&=+$'], ['%3B%2C%2F%3F%3A%40%26%3D%2B%24']);
        testEqual(new EncodeURIComponent(), ['-_.!~*\'()'], ['-_.!~*\'()']);
        testEqual(new EncodeURIComponent(), ['#'], ['%23']);
        testEqual(new EncodeURIComponent(), ['ABC abc 123'], ['ABC%20abc%20123']);
    });
});
