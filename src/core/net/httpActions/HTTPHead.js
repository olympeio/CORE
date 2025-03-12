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

import { Brick, registerBrick, ErrorFlow } from 'olympe';
import {httpRequest} from "helpers/httpRequest";
import {forwardEventOrErrorFlow, handleStatusAndHeaders} from "../utils/httpResponseHandlers";

export default class HTTPHead extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} headers
     * @param {string} url
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(number)} setStatusCode
     * @param {function(string)} setHeaders
     */
     async update(context, [ url, headers], [ forwardEvent, setErrorFlow, setStatusCode, setHeaders]) {
        const response = await httpRequest('HEAD', url, headers);
        handleStatusAndHeaders(response, setStatusCode, setHeaders);
        forwardEventOrErrorFlow(response, forwardEvent, setErrorFlow);
    }
}

registerBrick('016ca991840e26d08a06', HTTPHead);
