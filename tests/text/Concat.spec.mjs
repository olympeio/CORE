import Concat from '../../src/core/text/Concat.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Concat brick', () => {
    it('should concat correctly', () => {
        const c = new Concat();
        testEqual(c, ['Hello', 'World'], ['HelloWorld']);
        testEqual(c, ['', 'Foo'], ['Foo']);
        testEqual(c, ['Foo', ''], ['Foo']);
    })
})
