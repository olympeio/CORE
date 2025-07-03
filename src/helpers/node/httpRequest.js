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

import { getLogger } from "logging";
import { convertStringToJson } from '../convertStringToJson';
import FormDataFromLib from 'form-data';

/**
 * @param {string} method
 * @param {string} url
 * @param {object|string} headers
 * @param {string=} body
 * @param {boolean=} withCors Not required in node, only there to keep the same signature of method between browser & node
 * @return {Promise<Response>|Promise}
 */
export const httpRequest = (method, url, headers, body, withCors) => {
    const fetch = require('node-fetch');
    const parsedHeaders = new fetch.Headers();
    const logger = getLogger(`HTTP Delete ${method}:`);
    let jsonInputHeader = null;
    try {
        jsonInputHeader = convertStringToJson(headers, 'Headers');
    } catch (error) {
        logger.error(error);
    }
    if (headers) {
        for (const [key, value] of Object.entries(jsonInputHeader)) {
            parsedHeaders.append(key, value);
        }
    }

    const init = {
        method: method,
        headers: parsedHeaders,
        mode: 'cors',
        cache: 'default'
    };

    if (body) {
        init.body = body;
    }

    return fetch.default(url, init);
}

/**
 * Get the form data from a library to be used with node-fetch
 *
 * @returns {*} A FormData object to be passed as a POST body
 */
export const getFormData = () => {
    return new FormDataFromLib();
}