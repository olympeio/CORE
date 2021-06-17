
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
    onUpdate(context, [url, body, headers], [ setBody, setStatusCode, setHeaders]) {
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
