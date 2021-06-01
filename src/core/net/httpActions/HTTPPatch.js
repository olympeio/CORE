
import { ActionBrick, registerBrick, Context } from 'olympe';
import doHttpRequest from "../httpUtils/doHttpRequest";
import {ErrorFlow} from "@olympeio/runtime-web";
import checkResponseStatus from "../httpUtils/checkResponse";

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
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} body
     * @param {string} headers
     * @param {string} url
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(Number)} setStatusCode
     * @param {function(String)} setBody
     * @param {function(String)} setHeaders
     */
    onUpdate(context, [body, headers, url], [ forwardEvent, setErrorFlow, setStatusCode, setBody, setHeaders]) {
        doHttpRequest('PATCH', url, headers, body)
            .then(_response => {
                    checkResponseStatus(_response, setHeaders, setErrorFlow, setStatusCode);

                    return _response.text();
                }
            )
            .then(_data => {
                if (_data)
                    setBody(_data);
                forwardEvent();
            });
    }
}

registerBrick('016ca9ad1ca77d079004', HTTPPatch);
