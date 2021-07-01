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

import Branch from '../../src/core/util/Branch.js';
import {Context} from "olympe";

describe('Branch brick', () => {

    xit('should trigger the right output', (done) => {
        const branch = new Branch();
        spyOn(branch, 'getInputs').and.returnValue(['event', 'condition']);

        const context = new Context('branch');

        const trueDispatcher = jasmine.createSpy('true');
        const falseDispatcher = jasmine.createSpy('false');
        const clearer = jasmine.createSpy();

        branch.setupUpdate(
            context,
            (inputs) => branch.onUpdate(context, inputs, [trueDispatcher, falseDispatcher]),
            clearer
        );

        context.set('event', Date.now());
        expect(falseDispatcher).toHaveBeenCalled();
        expect(trueDispatcher).not.toHaveBeenCalled();
        trueDispatcher.calls.reset(); falseDispatcher.calls.reset();

        context.set('condition', true);
        expect(falseDispatcher).not.toHaveBeenCalled();
        expect(trueDispatcher).not.toHaveBeenCalled();
        context.set('event', Date.now());
        expect(falseDispatcher).not.toHaveBeenCalled();
        expect(trueDispatcher).toHaveBeenCalled();
        trueDispatcher.calls.reset(); falseDispatcher.calls.reset();

        context.set('condition', false);
        context.set('event', Date.now());
        expect(falseDispatcher).toHaveBeenCalled();
        expect(trueDispatcher).not.toHaveBeenCalled();
    });
});
