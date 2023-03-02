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

import { ActionBrick, registerBrick, Auth, AuthState } from 'olympe';

/**
 ## Description
 Log out current user.
**/
export default class Logout extends ActionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {!Array} _1
     * @param {function()} dispatchControlFlow
     */
    update(context, _1, [dispatchControlFlow]) {
        if (Auth.getState() === AuthState.AUTHENTICATED) {
            Auth.logout().then((_2) => {
                if (Auth.getState() === AuthState.GUEST) {
                    dispatchControlFlow();
                }
            });
        }
    }
}

registerBrick('0163d0188add5a16a56d', Logout);
