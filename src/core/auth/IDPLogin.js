import { ActionBrick, registerBrick, Auth, ErrorFlow } from 'olympe';
import { getLogger } from '@olympeio/core';

export default class IDPLogin extends ActionBrick {
    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     */
    update($, [ssoName], [forwardEvent, setErrorFlow]) {
        if (!ssoName || ssoName === 'default') {
            Auth.loginSSO();
            forwardEvent();
        } else if (Auth.getIDPNames().includes(ssoName)) {
            Auth.loginSSO(ssoName);
            forwardEvent();
        } else {
            getLogger('IDPLogin').error('SSO Name is invalid');
            setErrorFlow(ErrorFlow.create('SSO Name is invalid', 1));
        }
    }
}

registerBrick('017c180422fd5c389d79', IDPLogin);
