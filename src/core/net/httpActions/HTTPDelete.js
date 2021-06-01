
import { ActionBrick, registerBrick, Context } from 'olympe';
import doHttpRequest from "../httpUtils/doHttpRequest";
import {ErrorFlow} from "@olympeio/runtime-web";
import checkResponseStatus from "../httpUtils/checkResponse";

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
 | Response Status Text | String | The response status text. |
 | Response Body | String | The body (i.e. the content) of the response. |
 | Response Headers | String | The response headers. |

 **/
export default class HTTPDelete extends ActionBrick {

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
        doHttpRequest('DELETE', url, headers, body)
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

registerBrick('016ca99aa88a43410c21', HTTPDelete);
