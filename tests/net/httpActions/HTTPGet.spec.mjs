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

import HTTPGet from '../../../src/core/net/httpActions/HTTPGet.js';
import {Context, ErrorFlow} from 'olympe';
import {mockFetch, mockRequest, mockResponse} from "../fetchMock.js";

xdescribe('HTTPGet action brick', () => {
    it('should get correctly',  (done) => {
        mockFetch(
            mockRequest('https://httpbin.org/get', 'GET', {"Content-Type": "application/json"}),
            mockResponse(true, 200, {}, '{"test": "response"}')
        );

        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const bodySpy = jasmine.createSpy();

        outputs.push(() => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(200);
            expect(headersSpy).toHaveBeenCalledWith('{}');
            expect(bodySpy).toHaveBeenCalledWith('{"test": "response"}');
            done();
        });
        outputs.push(_errorFlow => {});
        outputs.push(statusCodeSpy);
        outputs.push(bodySpy);
        outputs.push(headersSpy);

        brick.onUpdate(context, ['https://httpbin.org/get', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should get an error correctly',  (done) => {
        mockFetch(
            mockRequest('abcd', 'GET', {}),
            mockResponse(false, 404, {}, 'NOT FOUND')
        );

        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const bodySpy = jasmine.createSpy();
        const errorFlowSpy = jasmine.createSpy();

        outputs.push(_timestamp => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(404);
            expect(headersSpy).toHaveBeenCalledTimes(0);
            expect(bodySpy).toHaveBeenCalledOnceWith('NOT FOUND');
            expect(errorFlowSpy).toHaveBeenCalledOnceWith(ErrorFlow.create('Network error', 404));
            done();
        });
        outputs.push(errorFlowSpy);
        outputs.push(statusCodeSpy);
        outputs.push(bodySpy);
        outputs.push(headersSpy);

        brick.onUpdate(context, ['abcd', ''], outputs);

    });
});
