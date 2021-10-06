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

import HTTPDelete from "../../../src/core/net/httpFunctions/HTTPDelete.js";
import {Context} from 'olympe';
import {mockFetch, mockRequest, mockResponse} from "../fetchMock.js";

describe('HTTPDelete function brick', () => {
    it('should delete correctly',  () => {
        mockFetch(
            mockRequest('https://httpbin.org/delete', 'DELETE', '{"Content-Type": "application/json"}', '{"test": "payload"}'),
            mockResponse(true, 200, {"Content-Type": "text/plain"}, 'test body')
        );

        const brick = new HTTPDelete();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(200));
        outputs.push(_setBody => expect(_setBody).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['https://httpbin.org/delete', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 405 error when deleting on a put-only url',  () => {
        mockFetch(
            mockRequest('https://httpbin.org/put', 'DELETE', '{"Content-Type": "application/json"}', '{"test": "payload"}'),
            mockResponse(false, 405, {"Content-Type": "text/plain"}, 'test body')
        );

        const brick = new HTTPDelete();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(405));
        outputs.push(_setBody => expect(_setBody).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['https://httpbin.org/put', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 404 error when deleting on a wrong url',  () => {
        mockFetch(
            mockRequest('abcd', 'DELETE', '{"Content-Type": "application/json"}', '{"test": "payload"}'),
            mockResponse(false, 404, {"Content-Type": "text/plain"}, 'test body')
        );

        const brick = new HTTPDelete();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(404));
        outputs.push(_setBody => expect(_setBody).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['abcd', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });
});
