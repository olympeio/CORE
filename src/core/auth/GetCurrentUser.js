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

import { Brick, registerBrick, Auth, Query, User } from 'olympe';

export default class GetCurrentUser extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        return Auth.observeUser($);
    }

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {string} userTag
     * @param {function(!User)} setUser
     */
    async update($, [userTag], [setUser]) {
        const result = await Query.fromTag(userTag, User).execute();
        setUser(result.getFirst());
    }
}

registerBrick('0163d016ab80564f0d88', GetCurrentUser);
