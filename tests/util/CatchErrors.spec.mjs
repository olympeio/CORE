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

import CatchErrors from '../../src/core/util/CatchErrors.js';
import {Context, ErrorFlow} from 'olympe';

describe('CatchErrors brick', () => {
    it('should catch an error, then trigger a control flow and spread its details', () => {
        const brick = new CatchErrors();
        const context = new Context();

        const message = 'this is an error message';
        const code = 1234;
        const errorFlow = ErrorFlow.create(message, code);

        const forwardEventSpy = jasmine.createSpy();
        const setMessageSpy = jasmine.createSpy();
        const setCodeSpy = jasmine.createSpy();

        brick.onUpdate(
            context, [errorFlow], [forwardEventSpy, setMessageSpy, setCodeSpy]
        );

        expect(forwardEventSpy).toHaveBeenCalled();
        expect(setCodeSpy).toHaveBeenCalledWith(code);
        expect(setMessageSpy).toHaveBeenCalledWith(message);
    });
});
