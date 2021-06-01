
import { ActionBrick, registerBrick, Context } from 'olympe';
import {ErrorFlow} from "@olympeio/runtime-web";
import doHttpRequest from "../httpUtils/helpers";

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
| Response Status Text | String | The response status text. |
| Response Body | String | The body (i.e. the content) of the response. |
| Response Headers | String | The response headers. |

**/
export default class HTTPPost extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} inputs
     * @param {!Array} outputs
     */
    onUpdate(context, [body, headers, url], [ forwardEvent, setErrorFlow, setStatusCode, setBody, setHeaders]) {
        doHttpRequest('POST', url, headers)
            .then(_response => {
                    if (_response.ok) {

                        let headersResponse = {};
                        for (const pair of _response.headers.entries()) {
                            headersResponse[pair[0]] = pair[1];
                        }
                        setHeaders(JSON.stringify(headersResponse));

                    } else {
                        setErrorFlow(ErrorFlow.create('Network error', _response.status));
                    }
                    setStatusCode(_response.status);
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

registerBrick('0163d09d43e8431f9663', HTTPPost);
