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
