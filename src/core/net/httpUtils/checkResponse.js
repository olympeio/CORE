import {ErrorFlow} from 'olympe';

export default function checkResponseStatus(_response, setHeaders, setErrorFlow, setStatusCode) {
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
}
