
import { ActionBrick, registerBrick, Context } from 'olympe';
import doHttpRequest from "../httpUtils/doHttpRequest";
import {ErrorFlow} from "@olympeio/runtime-web";
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
 | Response Status Text | String | The response status text. |
 | Response Headers | String | The response headers. |

 **/
export default class HTTPHead extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!String} headers
     * @param {!String} url
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(Number)} setStatusCode
     * @param {function(String)} setHeaders
     */
    onUpdate(context, [headers, url], [ forwardEvent, setErrorFlow, setStatusCode, setHeaders]) {
        doHttpRequest('HEAD', url, headers)
            .then(_response => {
                    checkResponseStatus(_response, setHeaders, setErrorFlow, setStatusCode);

                    forwardEvent();
                }
            );
    }
}

registerBrick('016ca991840e26d08a06', HTTPHead);
