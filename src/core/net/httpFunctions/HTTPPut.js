
import { FunctionBrick, registerBrick} from 'olympe';
import doHttpRequest from "../httpUtils/doHttpRequest";
import checkResponseStatus from "../httpUtils/checkResponse";

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
 | Response Headers | String | The response headers. |

 **/
export default class HTTPPut extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} headers
     * @param {string} body
     * @param {string} url
     * @param {function(number)} setStatusCode
     * @param {function(string)} setBody
     * @param {function(string)} setHeaders
     */
    onUpdate(context, [headers, body, url], [ setHeaders, setStatusCode]) {
        doHttpRequest('PUT', url, headers, body)
            .then(_response => {
                    checkResponseStatus(_response, setHeaders, undefined, setStatusCode);
                }
            );
    }
}

registerBrick('016ca923713b7e8ecb69', HTTPPut);
