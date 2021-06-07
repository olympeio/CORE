
import { FunctionBrick, registerBrick, Context } from 'olympe';
import doHttpRequest from "../httpUtils/doHttpRequest";
import checkResponseStatus from "../httpUtils/checkResponse";

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
export default class HTTPHead extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} url
     * @param {string} headers
     * @param {function(number)} setStatusCode
     * @param {function(string)} setHeaders
     */
    onUpdate(context, [url, headers], [ setStatusCode, setHeaders]) {
        doHttpRequest('HEAD', url, headers)
            .then(_response => {
                    checkResponseStatus(_response, setHeaders, undefined, setStatusCode);
                }
            );
    }
}

registerBrick('016ca9938e98ca1760d5', HTTPHead);
