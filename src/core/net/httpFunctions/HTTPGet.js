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
import {handleStatusAndHeaders, handleData} from "../utils/httpResponseHandlers";

export default class HTTPGet extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} headers
     * @param {string} url
     * @param {function(string)} setBody
     * @param {function(string)} setHeaders
     * @param {function(number)} setStatusCode
     * @param {function(string)} setStatusText
     * @param {function(ErrorFlow)} setErrorFlow
     */
    async update(context, [url, headers], [setStatusCode, setBody, setHeaders, setErrorFlow]) {
        const response = await httpRequest('GET', url, headers);
        const responseHeaders = handleStatusAndHeaders(response, setStatusCode, setHeaders);
        await handleData(response, responseHeaders, setBody);
        if(!response.ok) {
            setErrorFlow(ErrorFlow.create(`Network error ${response.status} ${response.statusText}`, response.status));
        }
    }
}

registerBrick('016ca8c47eac1f7f797e', HTTPGet);
