
import { FunctionBrick, registerBrick } from 'olympe';
import httpRequest from "helpers/httpRequest";
import checkResponseStatus from "../utils/checkResponse";

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
export default class HTTPGet extends FunctionBrick {

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
    onUpdate(context, [url, headers], [setBody, setHeaders, setStatusCode]) {
        httpRequest('GET', url, headers)
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

registerBrick('016ca8c47eac1f7f797e', HTTPGet);
