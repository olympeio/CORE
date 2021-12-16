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
import {map} from "rxjs/operators";

export default class Login extends FunctionBrick {

    /**
     * @override
     */
    setupExecution(context) {
        const [inputFlow, inputUser, inputPassword] = this.getInputs();
        return context.observe(inputFlow).pipe(map((timestamp) => {
            if (timestamp === null) {
                // Clear the action only if the control flow has no value.
                return null;
            }

            const username = context.has(inputUser) ? context.get(inputUser) : '';
            const password = context.has(inputPassword) ? context.get(inputPassword) : '';
            return [username, password];
        }));
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
    update(context, [username, password], [onSuccess, onFailure, dispatchErrorFlow]) {
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
