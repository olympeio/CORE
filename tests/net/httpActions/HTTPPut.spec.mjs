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

import HTTPPut from '../../../src/core/net/httpActions/HTTPPut.js';
import {BrickContext} from 'olympe';
import {mockFetch, mockRequest, mockResponse} from "../fetchMock.js";

xdescribe('HTTPPut action brick', () => {
    it('should put correctly', (done) => {
        mockFetch(
            mockRequest('https://httpbin.org/put', 'PUT', '{"Content-Type": "application/json"}', '{"test": "payload"}'),
            mockResponse(true, 200, {"Content-Type": "text/plain"}, 'test body')
        );

        const brick = new HTTPPut();

        const context = new BrickContext().createChild();
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

        brick.update(context, ['https://httpbin.org/put', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 405 error when puting on a get-only url',  (done) => {
        mockFetch(
            mockRequest('https://httpbin.org/get', 'PUT', '{"Content-Type": "application/json"}', '{"test": "payload"}'),
            mockResponse(false, 405, {})
        );

        const brick = new HTTPPut();

        const context = new BrickContext().createChild();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const forwardEventSpy = jasmine.createSpy();

        outputs.push(forwardEventSpy);
        outputs.push(errorFlow => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(405);
            expect(headersSpy).toHaveBeenCalledOnceWith({});
            expect(errorFlow.getCode()).toEqual(405);
            done();
        });
        outputs.push(statusCodeSpy);
        outputs.push(headersSpy);

        brick.update(context, ['https://httpbin.org/get', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });
});
