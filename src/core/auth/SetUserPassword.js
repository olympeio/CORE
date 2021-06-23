/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { ActionBrick, Auth, registerBrick, DBView , User, ErrorFlow} from 'olympe';

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
     * @param {string} user
     * @param {string} password
     * @param {function(!ErrorFlow)} dispatchError
     * @param {function()} forwardEvent
     */
    onUpdate(context, [user, password], [forwardEvent, dispatchError]) {
        const transaction = context.getTransaction();
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
