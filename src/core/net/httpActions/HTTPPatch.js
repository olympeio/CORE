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

import { ActionBrick, registerBrick, ErrorFlow } from 'olympe';
import {httpRequest} from "helpers/httpRequest";
import {forwardEventOrErrorFlow, handleData, handleStatusAndHeaders} from "../utils/httpResponseHandlers";

/**
## Description
Sends an HTTP PATCH request to the specified URL and provide the results.

The HTTP PATCH request method applies partial modifications to a resource.
The HTTP PUT method only allows complete replacement of a document. Unlike PUT, PATCH is not idempotent, meaning
successive identical patch requests may have different effects. However, it is possible to issue PATCH requests in
such a way as to be idempotent.

Additional headers can be provided and returned in a string that has to be in JSON format.

**Example:** '{"Content-Type": "text/html; charset=UTF-8",  "Content-Length": 1024 }'

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| URL | String | The URL to query. |
| Headers | String | Optional HTTP headers in a JSON parsable string. |
| Body | String | The body of the request. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Response Status Code | Number | The response status code. |
| Response Body | String | The body (i.e. the content) of the response. |
| Response Headers | String | The response headers. |

**/
export default class HTTPPatch extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} body
     * @param {string} headers
     * @param {string} url
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(number)} setStatusCode
     * @param {function(string)} setBody
     * @param {function(string)} setHeaders
     */
    async update(context, [ url, body, headers], [ forwardEvent, setErrorFlow, setStatusCode, setBody, setHeaders]) {
        const response = await httpRequest('PATCH', url, headers, body)
        const responseHeaders = handleStatusAndHeaders(response, setStatusCode, setHeaders);
        await handleData(response, responseHeaders, setBody);
        forwardEventOrErrorFlow(response, forwardEvent, setErrorFlow);
    }
}

registerBrick('016ca9ad1ca77d079004', HTTPPatch);
