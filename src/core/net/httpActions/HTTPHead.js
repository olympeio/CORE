import { ActionBrick, registerBrick } from 'olympe';
import httpRequest from "helpers/httpRequest";
import checkResponseStatus from "../utils/checkResponse";

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
export default class HTTPHead extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} headers
     * @param {string} url
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(number)} setStatusCode
     * @param {function(string)} setHeaders
     */
    onUpdate(context, [ url, headers], [ forwardEvent, setErrorFlow, setStatusCode, setHeaders]) {
        httpRequest('HEAD', url, headers)
            .then((response) => {
                checkResponseStatus(response, setHeaders, setErrorFlow, setStatusCode);
                forwardEvent();
            });
    }
}

registerBrick('016ca991840e26d08a06', HTTPHead);
