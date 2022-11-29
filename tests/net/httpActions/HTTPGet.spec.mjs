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
import {mockFetch, mockRequest, mockResponse, SMALL_GIF} from "../fetchMock.js";
import {fromBase64} from 'helpers/binaryConverters';

describe('HTTPGet action brick', () => {
    it('should get correctly',  (done) => {
        mockFetch(
            mockRequest('https://httpbin.org/get', 'GET', {"Content-Type": "application/json"}),
            mockResponse(true, 200, {"Content-Type": "application/json"}, '{"test": "response"}')
        );

        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const bodySpy = jasmine.createSpy();

        outputs.push(() => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(200);
            expect(headersSpy).toHaveBeenCalledWith({"content-type":"application/json"});
            expect(bodySpy).toHaveBeenCalledWith('{"test": "response"}');
            done();
        });
        outputs.push(_errorFlow => {});
        outputs.push(statusCodeSpy);
        outputs.push(bodySpy);
        outputs.push(headersSpy);

        brick.update(context, ['https://httpbin.org/get', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should get an error correctly',  (done) => {
        mockFetch(
            mockRequest('abcd', 'GET', {}),
            mockResponse(false, 404, {"content-type": "text/plain"}, 'NOT FOUND')
        );

        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const bodySpy = jasmine.createSpy();
        const forwardEventSpy = jasmine.createSpy();

        outputs.push(forwardEventSpy);
        outputs.push(errorFlow => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(404);
            expect(headersSpy).toHaveBeenCalledOnceWith({"content-type":"text/plain"});
            expect(bodySpy).toHaveBeenCalledOnceWith('NOT FOUND');
            expect(errorFlow.getCode()).toBe(404);
            done();
        });
        outputs.push(statusCodeSpy);
        outputs.push(bodySpy);
        outputs.push(headersSpy);

        brick.update(context, ['abcd', ''], outputs);

    });

    it('should get a non-text file as a dataUrl',  (done) => {
        mockFetch(
            mockRequest('https://httpbin.org/image', 'GET', {}),
            mockResponse(true, 200, {"content-type": "image/gif"}, fromBase64(SMALL_GIF))
        );

        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const bodySpy = jasmine.createSpy();
        const errorFlowSpy = jasmine.createSpy();

        outputs.push(timestamp => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(200);
            expect(headersSpy).toHaveBeenCalledOnceWith({"content-type":"image/gif"});
            expect(bodySpy).toHaveBeenCalledOnceWith(SMALL_GIF);
            expect(errorFlowSpy).not.toHaveBeenCalled();
            done();
        });
        outputs.push(errorFlowSpy);
        outputs.push(statusCodeSpy);
        outputs.push(bodySpy);
        outputs.push(headersSpy);

        brick.update(context, ['https://httpbin.org/image', ''], outputs);

    });
});
