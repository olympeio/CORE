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

import HTTPPost from '../../../src/core/net/httpFunctions/HTTPPost.js';
import {Context} from 'olympe';
import {mockFetch, mockRequest, mockResponse} from "../fetchMock.js";

xdescribe('HTTPPost function brick', () => {
    it('should post correctly',  () => {
        mockFetch(
            mockRequest('https://httpbin.org/post', 'POST', '{"Content-Type": "application/json"}', '{"test": "payload"}'),
            mockResponse(true, 200, {"Content-Type": "text/plain"}, 'test body')
        );

        const brick = new HTTPPost();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(200));
        outputs.push(_body => expect(_body).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.update(context, ['https://httpbin.org/post', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);

    });

    it('should generate a 405 error when posting on a put-only url',  () => {
        mockFetch(
            mockRequest('https://httpbin.org/put', 'POST', '{"Content-Type": "application/json"}', '{"test": "payload"}'),
            mockResponse(false, 405, {"Content-Type": "text/plain"}, 'test body')
        );

        const brick = new HTTPPost();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(405));
        outputs.push(_body => expect(_body).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.update(context, ['https://httpbin.org/put', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 404 error when posting on a wrong url',  () => {
        mockFetch(
            mockRequest('abcd', 'POST', '{"Content-Type": "application/json"}', '{"test": "payload"}'),
            mockResponse(false, 404, {"Content-Type": "text/plain"}, 'test body')
        );

        const brick = new HTTPPost();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(404));
        outputs.push(_body => expect(_body).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.update(context, ['abcd', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });
});
