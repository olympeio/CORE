import { FunctionBrick, registerBrick, Context, Auth, AuthState } from 'olympe';

/**
## Description
This function checks whether the active user is properly authenticated.
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| result | Boolean | `true` if the user is authenticated. |
**/
export default class IsAuthenticated extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} _
     * @param {function(boolean)} setResult
     */
    onUpdate(context, _, [setResult]) {
        setResult(Auth.getState() === AuthState.AUTHENTICATED);
    }
}

registerBrick('0163d0170fb07aa32ef1', IsAuthenticated);
