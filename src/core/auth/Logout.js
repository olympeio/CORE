import { ActionBrick, registerBrick, Auth, AuthState } from 'olympe';

/**
 ## Description
 Log out current user.
**/
export default class Logout extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} _
     * @param {function()} dispatchControlFlow
     */
    onUpdate(context, _, [dispatchControlFlow]) {
        if (Auth.getState() === AuthState.AUTHENTICATED) {
            Auth.logout().then((_) => {
                if (Auth.getState() === AuthState.GUEST) {
                    dispatchControlFlow();
                }
            });
        }
    }
}

registerBrick('0163d0188add5a16a56d', Logout);
