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

import { ActionBrick, registerBrick } from 'olympe';
import DebugLog from "./DebugLog";

export default class Log extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {?string} loglevel
     * @param {?string} prefix
     * @param {?string} message
     * @param {function()} forwardEvent
     */
    update($, [loglevel, prefix, message], [forwardEvent]) {
        DebugLog.log(loglevel, prefix, message);
        forwardEvent();
    }
}

registerBrick('0162afedd7acb5c5451a', Log);
