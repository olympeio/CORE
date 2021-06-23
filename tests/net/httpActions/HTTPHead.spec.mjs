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

import HTTPHead from '../../../src/core/net/httpActions/HTTPHead.js';
import {Context, ErrorFlow} from 'olympe';

describe('HTTPHead action brick', () => {
    it('should head correctly', (done) => {
        const brick = new HTTPHead();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();

        outputs.push(() => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(200);
            expect(headersSpy).toHaveBeenCalled();
            done();
        });
        outputs.push(_errorFlow => {});
        outputs.push(statusCodeSpy);
        outputs.push(headersSpy);

        brick.onUpdate(context, ['https://httpbin.org/get', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 405 error when heading on a put-only url',  (done) => {
        const brick = new HTTPHead();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const errorFlowSpy = jasmine.createSpy();

        outputs.push(_timestamp => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(405);
            expect(headersSpy).toHaveBeenCalledTimes(0);
            expect(errorFlowSpy).toHaveBeenCalledOnceWith(ErrorFlow.create('Network error', 405));
            done();
        });
        outputs.push(errorFlowSpy);
        outputs.push(statusCodeSpy);
        outputs.push(headersSpy);

        brick.onUpdate(context, ['https://httpbin.org/put', '{"Content-Type": "application/json"}'], outputs);
    });
});
