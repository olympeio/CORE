
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

import { FunctionBrick, registerBrick } from 'olympe';
import httpRequest from "helpers/httpRequest";
import checkResponseStatus from "../utils/checkResponse";

/**
## Description
Sends an HTTP POST request to the specified URL and provide the results.

The HTTP POST method sends data to the server. The type of the body of the request is indicated by the `Content-Type` header.
The difference between PUT and POST is that PUT is idempotent: calling it once or several times successively has the
same effect (that is no side effect), where successive identical POST may have additional effects, like passing an
order several times.

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
export default class HTTPPost extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} url
     * @param {string} body
     * @param {string} headers
     * @param {function(string)} setBody
     * @param {function(number)} setStatusCode
     * @param {function(string)} setHeaders
     */
    onUpdate(context, [url, body, headers], [ setStatusCode, setBody, setHeaders]) {
        httpRequest('POST', url, headers, body)
            .then((response) => {
                checkResponseStatus(response, setHeaders, undefined, setStatusCode);
                return response.text();
            })
            .then((data) => {
                if (data) {
                    setBody(data);
                }
            });
    }
}

registerBrick('016ca9472b05bf88a947', HTTPPost);