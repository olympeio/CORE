import MathFunctions from '../../src/core/math/MathFunctions.js';
import testEqual from '../helpers/testEqual.mjs';
import { Context } from 'olympe';

describe('MathFunctions brick', () => {
    it('should compute the correct value for a valid math function', () => {
        testEqual(new MathFunctions(), ['sqrt', 4], [2]);
    });
    it('should not set the output when the name of the function is incorrect', () => {

        const setter = jasmine.createSpy().and.callFake(() => {});

        new MathFunctions().onUpdate(new Context(), ['toto', 4], [setter]);

        expect(setter).not.toHaveBeenCalled();
    });
    it('should not set the output when trying to call a function with more than one parameter', () => {
        const setter = jasmine.createSpy().and.callFake(() => {});

        new MathFunctions().onUpdate(new Context(), ['pow', 2], [setter]);

        expect(setter).not.toHaveBeenCalled();
    });
    it('should not set the output when trying to call a function with an input that is not a number', () => {
        const setter = jasmine.createSpy().and.callFake(() => {});

        new MathFunctions().onUpdate(new Context(), ['sqrt', 'four'], [setter]);

        expect(setter).not.toHaveBeenCalled();
    });
});
