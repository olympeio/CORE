import DecodeURIComponent from '../../src/core/net/DecodeURIComponent.js';
import testEqual from '../helpers/testEqual.mjs';

describe('DecodeURIComponent brick', () => {
    it('should decode correctly', () => {
        // From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
        testEqual(new DecodeURIComponent(), ['%3B%2C%2F%3F%3A%40%26%3D%2B%24', false], [';,/?:@&=+$']);
        testEqual(new DecodeURIComponent(), ['-_.!~*\'()', false], ['-_.!~*\'()']);
        testEqual(new DecodeURIComponent(), ['%23', false], ['#']);
        testEqual(new DecodeURIComponent(), ['ABC%20abc%20123', false], ['ABC abc 123']);
        testEqual(new DecodeURIComponent(), [';,/?:@&=+$', true], [';,/?:@&=+$']);
        testEqual(new DecodeURIComponent(), ['-_.!~*\'()', true], ['-_.!~*\'()']);
        testEqual(new DecodeURIComponent(), ['#', true], ['#']);
        testEqual(new DecodeURIComponent(), ['ABC%20abc%20123', true], ['ABC abc 123']);
    });
});
