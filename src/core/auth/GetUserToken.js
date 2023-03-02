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

import { Brick, registerBrick, Auth } from 'olympe';

export default class GetUserToken extends Brick {

    /**
     * @protected
     * @param {Context} context
     * @param {!Array} inputs
     * @param {function(string)} setToken
     * @param {function(string)} setProtocol
     * @param {function(string)} setIDPName
     * @param {function(Object)} setPayload
     */
    update(context, inputs, [setToken, setProtocol, setIDPName, setPayload]) {
        const userToken = Auth.getUserToken();
        setToken(userToken.nonce);
        setProtocol?.(userToken.protocol);
        setIDPName?.(userToken.idpName ?? null);
        setPayload?.(userToken.payload);
    }
}

registerBrick('017a34a31064c3fc1dee', GetUserToken);
