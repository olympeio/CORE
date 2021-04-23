import Contains from '../../src/core/text/Contains.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Contains brick', () => {
    it('should test correctly', () => {
        const c = new Contains();
        testEqual(c, ['Hello World', 'World'], [true]);
        testEqual(c, ['Hello World', 'Foo'], [false]);
        testEqual(c, ['', 'Foo'], [false]);
        testEqual(c, ['Foo', ''], [true]);
    });
    it('should convert automatically', () => {
        const c = new Contains();
        testEqual(c, [123, '2'], [true]);
        testEqual(c, ['Hello', 1], [false]);
        testEqual(c, [123, 2], [true]);
        testEqual(c, [true, 'Hello'], [false]);
        testEqual(c, [true, false], [false]);
        testEqual(c, [false, false], [true]);
        testEqual(c, ['It is true', true], [true]);
    });
});
