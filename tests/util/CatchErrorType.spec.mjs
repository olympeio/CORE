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

import CatchErrorType from '../../src/core/util/CatchErrorType.js';
import { ErrorFlow, Context } from 'olympe';

describe('CatchErrorType brick', () => {
    it('should catch an error, then trigger a control flow and spread its details if the input code is the same than the error code', () => {
        const brick = new CatchErrorType();
        const context = new Context();

        const message = 'this is an error message';
        const code = 1234;
        const errorFlow = ErrorFlow.create(message, code);

        const forwardEventSpy = jasmine.createSpy();
        const setErrorFlowSpy = jasmine.createSpy();
        const setMessageSpy = jasmine.createSpy();

        brick.onUpdate(
            context, [errorFlow, code], [forwardEventSpy, setErrorFlowSpy, setMessageSpy]
        );

        expect(forwardEventSpy).toHaveBeenCalled();
        expect(setErrorFlowSpy).not.toHaveBeenCalled();
        expect(setMessageSpy).toHaveBeenCalledWith(message);
    });

    it('should only forward the error flow if the codes are different', () => {
        const brick = new CatchErrorType();
        const context = new Context();

        const message = 'this is an error message';
        const code = 1234;
        const errorFlow = ErrorFlow.create(message, 12345);

        const forwardEventSpy = jasmine.createSpy();
        const setErrorFlowSpy = jasmine.createSpy();
        const setMessageSpy = jasmine.createSpy();

        brick.onUpdate(
            context, [errorFlow, code], [forwardEventSpy, setErrorFlowSpy, setMessageSpy]
        );

        expect(forwardEventSpy).not.toHaveBeenCalled();
        expect(setErrorFlowSpy).toHaveBeenCalledWith(errorFlow);
        expect(setMessageSpy).not.toHaveBeenCalled();
    });
});
