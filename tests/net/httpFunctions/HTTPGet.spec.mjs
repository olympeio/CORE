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

import HTTPGet from '../../../src/core/net/httpFunctions/HTTPGet.js';
import {Context} from 'olympe';
import {mockFetch, mockRequest, mockResponse, SMALL_GIF} from "../fetchMock.js";
import {fromBase64} from 'helpers/binaryConverters';

xdescribe('HTTPGet function brick', () => {
    it('should get correctly',  () => {
        mockFetch(
            mockRequest('https://httpbin.org/get', 'GET', '{"Content-Type": "application/json"}'),
            mockResponse(true, 200, {"Content-Type": "text/plain"}, 'test body')
        );

        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(200));
        outputs.push(_setBody => expect(_setBody).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.update(context, ['https://httpbin.org/get', '{"Content-Type": "application/json"}'], outputs);

    });

    it('should generate a 405 error when getting on a put-only url',  () => {
        mockFetch(
            mockRequest('https://httpbin.org/put', 'GET', '{"Content-Type": "application/json"}'),
            mockResponse(false, 405, {"Content-Type": "text/plain"}, 'test body')
        );

        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(405));
        outputs.push(_setBody => expect(_setBody).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.update(context, ['https://httpbin.org/put', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 404 error when getting on a wrong url',  () => {
        mockFetch(
            mockRequest('abcd', 'GET', '{"Content-Type": "application/json"}'),
            mockResponse(false, 404, {"Content-Type": "text/plain"}, 'test body')
        );

        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(404));
        outputs.push(_setBody => expect(_setBody).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.update(context, ['abcd', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should get a non-text file as a dataUrl',  () => {
        mockFetch(
            mockRequest('https://httpbin.org/image', 'GET', {}),
            mockResponse(true, 200, {"content-type": "image/gif"}, fromBase64(SMALL_GIF))
        );

        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(200));
        outputs.push(_body => expect(_body).toEqual(SMALL_GIF));
        outputs.push(_headers => expect(_headers).toEqual({"content-type":"image/gif"}));

        brick.update(context, ['https://httpbin.org/image', ''], outputs);

    });
});
