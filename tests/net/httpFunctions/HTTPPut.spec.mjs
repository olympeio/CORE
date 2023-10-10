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

import HTTPPut from '../../../src/core/net/httpFunctions/HTTPPut.js';
import {BrickContext} from 'olympe';
import {mockFetch, mockRequest, mockResponse} from "../fetchMock.js";

describe('HTTPPut function brick', () => {
    it('should put correctly', async () => {
        const brick = new HTTPPut();
        const context = new BrickContext().createChild();
        const outputs = [
            jasmine.createSpy(),
            jasmine.createSpy(),
            jasmine.createSpy(),
        ];
        mockFetch(
            mockRequest('https://httpbin.org/put', 'PUT', '{"Content-Type": "application/json"}', '{"test": "payload"}'),
            mockResponse(true, 200, {})
        );
        await brick.update(context, ['https://httpbin.org/put', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);

        expect(outputs[0]).toHaveBeenCalledWith(200);
        expect(outputs[1]).toHaveBeenCalledWith({});
        expect(outputs[2]).not.toHaveBeenCalled();
    });


    it('should generate a 405 error when putting on a post-only url',  async () => {
        const brick = new HTTPPut();
        const context = new BrickContext().createChild();
        const outputs = [
            jasmine.createSpy(),
            jasmine.createSpy(),
            jasmine.createSpy(),
        ];
        mockFetch(
            mockRequest('https://httpbin.org/post', 'PUT', '{"Content-Type": "application/json"}', '{"test": "payload"}'),
            mockResponse(false, 405, {})
        );
        await brick.update(context, [ 'https://httpbin.org/post', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);

        expect(outputs[0]).toHaveBeenCalledWith(405);
        expect(outputs[1]).toHaveBeenCalledWith({});
        expect(outputs[2]).toHaveBeenCalled();
    });

    it('should generate a 404 error when putting on a wrong url',  async () => {
        const brick = new HTTPPut();
        const context = new BrickContext().createChild();
        const outputs = [
            jasmine.createSpy(),
            jasmine.createSpy(),
            jasmine.createSpy(),
        ];
        mockFetch(
            mockRequest('abcd', 'PUT', '{"Content-Type": "application/json"}', '{"test": "payload"}'),
            mockResponse(false, 404, {})
        );

        await brick.update(context, ['abcd',  '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);

        expect(outputs[0]).toHaveBeenCalledWith(404);
        expect(outputs[1]).toHaveBeenCalledWith({});
        expect(outputs[2]).toHaveBeenCalled();
    });
});
