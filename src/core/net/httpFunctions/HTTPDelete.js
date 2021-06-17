import { FunctionBrick, registerBrick } from 'olympe';
import httpRequest from "helpers/httpRequest";
import checkResponseStatus from "../utils/checkResponse";

/**
## Description
Sends an HTTP DELETE request to the specified URL and provide the results.

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
export default class HTTPDelete extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} body
     * @param {string} headers
     * @param {string} url
     * @param {function(string)} setBody
     * @param {function(number)} setStatusCode
     * @param {function(string)} setHeaders
     */
    onUpdate(context, [headers, body, url], [ setBody, setStatusCode, setHeaders]) {
        httpRequest('DELETE', url, headers, body)
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

registerBrick('016ca99aa59aa7df5e04', HTTPDelete);
