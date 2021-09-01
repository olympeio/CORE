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

import HTTPHead from '../../../src/core/net/httpFunctions/HTTPHead.js';
import {Context} from 'olympe';
import {mockFetch, mockRequest, mockResponse} from "../fetchMock.js";

xdescribe('HTTPHead function brick', () => {
    it('should head correctly',  () => {
        mockFetch(
            mockRequest('https://httpbin.org/get', 'HEAD', '{"Content-Type": "application/json"}'),
            mockResponse(true, 200, {})
        );

        const brick = new HTTPHead();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(200));
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['https://httpbin.org/get', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 405 error when heading on a put-only url',  () => {
        mockFetch(
            mockRequest('https://httpbin.org/put', 'HEAD', '{"Content-Type": "application/json"}'),
            mockResponse(false, 405, {})
        );

        const brick = new HTTPHead();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(405));
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['https://httpbin.org/put', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 404 error when heading on a wrong url',  () => {
        mockFetch(
            mockRequest('abcd', 'HEAD', '{"Content-Type": "application/json"}'),
            mockResponse(false, 404, {})
        );

        const brick = new HTTPHead();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(404));
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['abcd', '{"Content-Type": "application/json"}'], outputs);
    });
});
