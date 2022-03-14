
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

import { Brick, registerBrick} from 'olympe';
import {httpRequest} from "helpers/httpRequest";
import {handleStatusAndHeaders} from "../utils/httpResponseHandlers";

/**
 ## Description
 Sends an HTTP PUT request to the specified URL and provide the results.

 The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request body.
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
 | Response Headers | String | The response headers. |

 **/
export default class HTTPPut extends Brick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} headers
     * @param {string} body
     * @param {string} url
     * @param {function(number)} setStatusCode
     * @param {function(string)} setBody
     * @param {function(string)} setHeaders
     */
    async update(context, [ url, body, headers], [ setStatusCode, setHeaders ]) {
        const response = await httpRequest('PUT', url, headers, body);
        handleStatusAndHeaders(response, setStatusCode, setHeaders);
    }
}

registerBrick('016ca923713b7e8ecb69', HTTPPut);
