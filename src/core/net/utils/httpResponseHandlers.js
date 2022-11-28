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

import {ErrorFlow} from 'olympe';
import {toBase64} from 'helpers/binaryConverters';
import {getLogger} from '../../../helpers/logging';

/**
 * Http brick helper to set the Status Code, Headers and Error Flow (optional) outputs
 * Also return the headers as a JS Object, for other uses such as helper "handleData"
 *
 * @param {Response} response
 * @param {function(number)} setStatusCode
 * @param {function(object)} setHeaders
 * @return {Object}
 */
export function handleStatusAndHeaders(response, setStatusCode, setHeaders) {
    setStatusCode(response.status);
    let headersResponse = {};
    for (const [key, value] of response.headers.entries()) {
        headersResponse[key] = value;
    }
    setHeaders(headersResponse);
    return headersResponse;
}

/**
 * Http brick helper to set the Body output
 * It will return UTF-8 text or a dataURL based on the mime-type received in the headers
 *
 * @param {Response} response
 * @param {Object} headers
 * @param {function(string)} setBody
 * @return {Promise<void>}
 */
export async function handleData(response, headers, setBody) {
    let mimeType = headers['content-type'];
    if(mimeType === undefined) {
        getLogger('HTTP').warn(`Content type is missing in the headers received from ${response.url}. Body will be output in base64 format.`);
    }
    let data;
    if(isMimeTypeText(mimeType)) {
        data = await response.text();
    } else {
        data = await response.arrayBuffer();
        if(data !== undefined) {
            data = toBase64(data);
        }
    }
    setBody(data || '');
}

/**
 * Http brick helper that triggers the control or error flow, depending on the response status
 *
 * @param {Response} response
 * @param {function()} forwardEvent
 * @param {function(ErrorFlow)} setErrorFlow
 */
export function forwardEventOrErrorFlow(response, forwardEvent, setErrorFlow) {
    if(response.ok) {
        forwardEvent();
    } else {
        // statusText seems to be given in node.js only, unfortunately
        setErrorFlow(ErrorFlow.create(`Network error ${response.status} ${response.statusText}`, response.status));
    }
}

/**
 * Content mime-type that should be directly returned as UTF-8 decoded string
 * Default (if mimeType is undefined) is to return as binary data
 * https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
 *
 * @param {string} mimeType
 * @return {boolean}
 */
export function isMimeTypeText(mimeType) {
    return mimeType !== undefined && (
        mimeType.startsWith('text') ||
        mimeType.startsWith('application/json') ||
        mimeType.startsWith('application/xml') ||
        mimeType.startsWith('application/javascript') ||
        mimeType.startsWith('application/typescript') ||
        mimeType.startsWith('application/xhtml+xml')
    );
}
