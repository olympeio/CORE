/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {registerBrick, Auth, AuthState, ErrorFlow, FunctionBrick} from 'olympe'

/**
 ## Description
 Attempts to log in a user providing its name and password. The authentication is attempted only once when the input control flow is triggered.
 ## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | controlFlow | Control Flow | Control flow to trigger the login process |
 | username | String | The username. |
 | password | String | The password for that user. |
 ## Outputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | On failure | Control Flow | Control flow triggered on failed authentication because of invalid credentials. |
 | On success | Control Flow | Control flow triggered on successful authentication. |
 | Error Flow | Error Flow | Error flow triggered when the server is unreachable or the authentication fails for unknown reasons. |
 ## Errors
 | Code | Description |
 | --- | --- |
 | 1 | Server unreachable. |
 | 2 | Authentication error. |
 **/
export default class Login extends FunctionBrick {

    /**
     * @override
     */
    setupUpdate(context, runCoreUpdate, clear) {
        const [incomingFlow, incomingUser, incomingPassword] = this.getInputs();

        // Listen on `user` and 'password' input updates. Null or undefined value will be considered as empty strings.
        let username = '';
        let password = '';

        context.observe(incomingUser, true).subscribe((inputValue) => {
            username = inputValue !== null ? inputValue : '';
        });

        context.observe(incomingPassword, true).subscribe((inputValue) => {
            password = inputValue !== null ? inputValue : '';
        });

        // Run runCoreUpdate only when incoming flow is triggered.
        context.observe(incomingFlow, true).subscribe((timestamp) => {
            if (timestamp) {
                // Execute the action only if the control flow has a value.
                runCoreUpdate([username, password]);
            } else {
                clear();
            }
        });
    }

    /**
     * Executed when the control flow is triggered
     *
     * @protected
     * @param {!Context} context
     * @param {string} username
     * @param {string} password
     * @param {function(number)} onSuccess
     * @param {function(!ErrorFlow)} dispatchErrorFlow
     * @param {function(number)} onFailure
     */
    onUpdate(context, [username, password], [onSuccess, onFailure, dispatchErrorFlow]) {
        Auth.loginSRP(username, password).then(() => {
            const currentState = Auth.getState()
            switch (currentState) {
                case AuthState.AUTHENTICATED:
                    onSuccess(Date.now());
                    break;
                case AuthState.GUEST:
                    // Invalid credentials
                    onFailure(Date.now());
                    break;
                case AuthState.ERROR:
                    // Authentication error
                    dispatchErrorFlow(ErrorFlow.create('Authentication error', 2));
                    break;
                case AuthState.DISCONNECTED:
                    // Server unreachable
                    dispatchErrorFlow(ErrorFlow.create('The server is unreachable', 1));
                    break;
                default:
            }
        }).catch(() => {
            dispatchErrorFlow(ErrorFlow.create('Authentication error', 2));
        })
    }
}

registerBrick('0163d01778b931d801dd', Login)
