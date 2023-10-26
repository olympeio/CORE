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

import {Brick, ErrorFlow, registerBrick} from 'olympe';
import {httpRequest} from "helpers/httpRequest";
import {handleStatusAndHeaders} from "../utils/httpResponseHandlers";

export default class HTTPPut extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} headers
     * @param {string} body
     * @param {string} url
     * @param {function(number)} setStatusCode
     * @param {function(string)} setBody
     * @param {function(string)} setHeaders
     * @param {function(ErrorFlow)} setErrorFlow
     */
    async update(context, [url, body, headers], [setStatusCode, setHeaders, setErrorFlow]) {
        const response = await httpRequest('PUT', url, headers, body);
        handleStatusAndHeaders(response, setStatusCode, setHeaders);
        if (!response.ok) {
            setErrorFlow(ErrorFlow.create(`Network error ${response.status} ${response.statusText}`, response.status));
        }
    }
}

registerBrick('016ca923713b7e8ecb69', HTTPPut);
