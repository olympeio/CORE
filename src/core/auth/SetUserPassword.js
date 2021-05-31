import { ActionBrick, Auth, registerBrick, Context , DBView , User} from 'olympe';

/**
## Description
Set the password of a user.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| user | User | The user. |
| new password | String | The password to set. |
## Errors
| Code | Description |
| --- | --- |
| 401 | Connected user is not allowed to change password. |

**/
export default class SetUserPassword extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} inputs
     * @param {!Array} outputs
     */
    onUpdate(context, [user, password], [dispatchError, forwardEvent]) {
        const transaction = context.getTransation();
        const login = /** @type {string} */ (DBView.get().getProperty(user, User.loginProp));
        // Generate SRP authentication data from the password
        const authData = Auth.generateSRPData(login, password);

        const update = transaction.update(user);
        update.setProperty(User.saltProp, authData['salt']);
        update.setProperty(User.verifierProp, authData['verifier']);

        // Execute the transaction
        context.releaseTransaction((submit, success, error) => {
            if (!success) {
                // In case of error, dispatch the error flow
                this.logger.error(error);
                dispatchError(ErrorFlow.create(
                    'Connected user is not allowed to change password',
                    401
                ));
            } else {
                // Otherwise dispatch the control flow
                forwardEvent();
            }
        });
    }
}

registerBrick('0175892cf0b8df7ebce5', SetUserPassword);
