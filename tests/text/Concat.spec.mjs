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
