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

import Now from '../../src/core/datetime/Now.js';
import { Context } from 'olympe';

describe('Now brick', () => {


    it('should setup an interval', () => {
        const interval = 500;
        spyOn(window, 'setInterval').and.callFake(
            (f, i) => {
                expect(i).toBe(interval);
                f();
            }
        );

        const setter = jasmine.createSpy().and.callFake(() => {});

        new Now().onUpdate(new Context(), [interval], [setter]);

        expect(setInterval).toHaveBeenCalled();
        expect(setter).toHaveBeenCalled();
    });

    it('should clear the interval upon context destruction', () => {
        const now = new Now();
        const context = new Context();

        spyOn(window, 'clearInterval');

        now.onUpdate(context, [500], [() => {}]);

        expect(clearInterval).not.toHaveBeenCalled();

        now.onDestroy(context);

        expect(clearInterval).toHaveBeenCalled();
    });

});
