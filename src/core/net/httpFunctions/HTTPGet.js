
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

import { Brick, registerBrick } from 'olympe';
import {httpRequest} from "helpers/httpRequest";
import {handleStatusAndHeaders, handleData} from "../utils/httpResponseHandlers";

/**
## Description
Sends an HTTP GET request to the specified URL and provide the results.

The HTTP GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

Additional headers can be provided and returned in a string that has to be in JSON format.

**Example:** '{"Content-Type": "text/html; charset=UTF-8",  "Content-Length": 1024 }'

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| URL | String | The URL to query. |
| Headers | String | Optional HTTP headers in a JSON parsable string. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Response Status Code | Number | The response status code. |
| Response Body | String | The body (i.e. the content) of the response. |
| Response Headers | String | The response headers. |

**/
export default class HTTPGet extends Brick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} headers
     * @param {string} url
     * @param {function(string)} setBody
     * @param {function(string)} setHeaders
     * @param {function(number)} setStatusCode
     * @param {function(string)} setStatusText
     */
    async update(context, [url, headers], [setStatusCode, setBody, setHeaders]) {
        const response = await httpRequest('GET', url, headers);
        const responseHeaders = handleStatusAndHeaders(response, setStatusCode, setHeaders);
        await handleData(response, responseHeaders, setBody);
    }
}

registerBrick('016ca8c47eac1f7f797e', HTTPGet);
