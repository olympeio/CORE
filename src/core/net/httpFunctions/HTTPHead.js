
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
import {forwardEventOrErrorFlow, handleStatusAndHeaders} from "../utils/httpResponseHandlers";

/**
## Description
Sends an HTTP HEAD request to the specified URL and provide the results.

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
| Response Headers | String | The response headers. |

**/
export default class HTTPHead extends Brick {

    /**
     * @protected
     * @param {!Context} context
     * @param {string} url
     * @param {string} headers
     * @param {function(number)} setStatusCode
     * @param {function(string)} setHeaders
     */
    async update(context, [url, headers], [ setStatusCode, setHeaders]) {
        const response = await httpRequest('HEAD', url, headers);
        handleStatusAndHeaders(response, setStatusCode, setHeaders);
    }
}

registerBrick('016ca9938e98ca1760d5', HTTPHead);
