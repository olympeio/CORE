/**
 * @public
 * @param {string} method
 * @param {string} url
 * @param {string} headers
 * @param {string=} body
 * @return {Promise<Response>|Promise}
 */
export default function doHttpRequest(method, url, headers, body) {
    const parsedHeaders = new Headers();

    if (headers) {
        for (const [key, value] of Object.entries(JSON.parse(headers))) {
            parsedHeaders.append(key, value);
        }
    }

    const init = {
        method: method,
        headers: parsedHeaders,
        mode: 'cors',
        cache: 'default'
    };

    if (body)
        init.body = body;

    if (typeof window === "undefined") {
        const fetch = require('node-fetch');
        return fetch(url, init);
    } else {
        return fetch(url, init);
    }
}
