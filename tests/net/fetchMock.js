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

/**
 * Helper methods to mock HTTP requests using the "fetch" API.
 */

export const mockRequest = (url, method, headers, body) => {
    const parsedHeaders = new Headers();
    if (headers) {
        for (const [key, value] of Object.entries(headers)) {
            parsedHeaders.append(key, value);
        }
    }
    const request = { url: url, method: method, headers: parsedHeaders, mode: 'cors', cache: 'default' };
    if (body) {
        request.body = body;
    }
    return request;
}

export const mockResponse = (ok, status, headers, body) => {
    const parsedHeaders = new Headers();
    if (headers) {
        for (const [key, value] of Object.entries(headers)) {
            parsedHeaders.append(key, value);
        }
    }
    return Promise.resolve({
        ok: ok,
        status: status,
        headers: parsedHeaders,
        text: () => Promise.resolve(body || '')
    });
}

export const mockFetch = (request, response) => {
    window['fetch'] = jasmine.createSpy().and.callFake((url, options) => {
        expect(url).toEqual(request.url);
        const expectedOptions = {
            method: request.method,
            headers: jasmine.objectContaining(request.headers)
        };
        if (request.body) {
            expectedOptions.body = request.body;
        }
        expect(options).toEqual(jasmine.objectContaining(expectedOptions));
        return response;
    });
}
