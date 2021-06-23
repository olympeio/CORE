import { ActionBrick, registerBrick } from 'olympe';
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
 | Response Body | String | The body (i.e. the content) of the response. |
 | Response Headers | String | The response headers. |

 **/
export default class HTTPPut extends ActionBrick {

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
     * @param {function(number)} setStatusCode
     * @param {function(string)} setBody
     * @param {function(string)} setHeaders
     */
    onUpdate(context, [ url, body, headers], [ forwardEvent, setErrorFlow, setStatusCode, setHeaders]) {
        httpRequest('PUT', url, headers, body)
            .then((response) => {
                checkResponseStatus(response, setHeaders, setErrorFlow, setStatusCode);
                forwardEvent();
            });
    }
}

registerBrick('016856cc8830ae0edc2c', HTTPPut);
