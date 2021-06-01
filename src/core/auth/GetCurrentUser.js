import { FunctionBrick, registerBrick, Context, Sync, Auth } from 'olympe';

/**
## Description
Data flow returning the current user.
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Current user | User | The current user. |
**/
export default class GetCurrentUser extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {function(Sync)} setUser
     */
    onUpdate(context, _, [setUser]) {
        setUser(Sync.getInstance(Auth.getCurrentUser()));
    }
}

registerBrick('0163d016ab80564f0d88', GetCurrentUser);
