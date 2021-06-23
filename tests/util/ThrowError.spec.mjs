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

import ThrowError from '../../src/core/util/ThrowError.js';
import {Context, ErrorFlow} from 'olympe';

describe('ThrowError brick', () => {
    xit('should generate an ErrorFlow correctly', () => {
        const brick = new ThrowError();
        spyOn(brick, 'getInputs').and.returnValue(['event', 'message', 'code']);

        const message = 'this is an error message';
        const code = 1234;

        const context = new Context();

        const errorFlowSpy = jasmine.createSpy();
        const clearer = jasmine.createSpy();

        brick.setupUpdate(
            context,
            (inputs) => brick.onUpdate(context, inputs, [errorFlowSpy]),
            clearer
        );

        context.set('event', Date.now());
        expect(errorFlowSpy).toHaveBeenCalled();
        errorFlowSpy.calls.reset();

        context.set('message', message);
        context.set('code', code);
        expect(errorFlowSpy).not.toHaveBeenCalled();
        context.set('event', Date.now());
        expect(errorFlowSpy).toHaveBeenCalledOnceWith(ErrorFlow.create(message, code));
        errorFlowSpy.calls.reset();

    });
});
