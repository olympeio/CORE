
/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { FunctionBrick, registerBrick} from 'olympe';
import httpRequest from "helpers/httpRequest";
import checkResponseStatus from "../utils/checkResponse";

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
export default class HTTPPut extends FunctionBrick {

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
    onUpdate(context, [ url, body, headers], [ setStatusCode, setHeaders ]) {
        httpRequest('PUT', url, headers, body)
            .then(_response => {
                    checkResponseStatus(_response, setHeaders, undefined, setStatusCode);
                }
            );
    }
}

registerBrick('016ca923713b7e8ecb69', HTTPPut);
