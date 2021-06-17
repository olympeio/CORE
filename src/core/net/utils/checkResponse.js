import {ErrorFlow} from 'olympe';

/**
 * @param {Response} response
 * @param {function(string)} setHeaders
 * @param {function(ErrorFlow)=} setErrorFlow
 * @param {function(number)} setStatusCode
 */
export default function checkResponseStatus(response, setHeaders, setErrorFlow, setStatusCode) {
    setStatusCode(response.status);

    if (response.ok) {
        let headersResponse = {};
        for (const [key, value] of response.headers.entries()) {
            headersResponse[key] = value;
        }
        setHeaders(JSON.stringify(headersResponse));

    } else {
        setErrorFlow && setErrorFlow(ErrorFlow.create('Network error', response.status));
    }
}
