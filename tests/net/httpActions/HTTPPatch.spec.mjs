/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import HTTPPatch from '../../../src/core/net/httpActions/HTTPPatch.js';
import {Context, ErrorFlow} from 'olympe';
import {mockFetch, mockRequest, mockResponse} from "../fetchMock.js";

xdescribe('HTTPPatch action brick', () => {
    it('should patch correctly', (done) => {
        mockFetch(
            mockRequest('https://httpbin.org/patch', 'PATCH', '{"Content-Type": "application/json"}', '{"test": "payload"}'),
            mockResponse(true, 200, {"Content-Type": "text/plain"}, 'test body')
        );

        const brick = new HTTPPatch();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const bodySpy = jasmine.createSpy();

        outputs.push(() => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(200);
            expect(headersSpy).toHaveBeenCalled();
            expect(bodySpy).toHaveBeenCalled();
            done();
        });
        outputs.push(_errorFlow => {});
        outputs.push(statusCodeSpy);
        outputs.push(bodySpy);
        outputs.push(headersSpy);

        brick.update(context, ['https://httpbin.org/patch', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 405 error when patching on a put-only url',  (done) => {
        mockFetch(
            mockRequest('https://httpbin.org/put', 'PATCH', '{"Content-Type": "application/json"}', '{"test": "payload"}'),
            mockResponse(false, 405, {"Content-Type": "text/plain"}, 'An error occurred')
        );

        const brick = new HTTPPatch();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const bodySpy = jasmine.createSpy();
        const forwardEventSpy = jasmine.createSpy();

        outputs.push(forwardEventSpy);
        outputs.push(errorFlow => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(405);
            expect(headersSpy).toHaveBeenCalledOnceWith('{"content-type":"text/plain"}');
            expect(bodySpy).toHaveBeenCalledOnceWith('An error occurred');
            expect(errorFlow.getCode()).toEqual(405);
            done();
        });
        outputs.push(statusCodeSpy);
        outputs.push(bodySpy);
        outputs.push(headersSpy);

        brick.update(context, ['https://httpbin.org/put', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });
});
