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

import { ActionBrick, registerBrick, Auth } from 'olympe';

/**
 ## Description
 Notify the DC to keep the user session alive. This resets the time left until automatic logout.
 **/
export default class KeepSessionAlive extends ActionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {!Array} _
     * @param {function()} forwardEvent
     */
    update(context, _, [forwardEvent]) {
        Auth.sendKeepAlive();
        forwardEvent();
    }
}

registerBrick('01701ad63ae58fe08b0b', KeepSessionAlive);
