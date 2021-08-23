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
