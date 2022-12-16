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

import { Brick, registerBrick } from 'olympe';
import {getLogger} from 'logging';
import {combineLatest} from "rxjs";

export default class DebugLog extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        // Propagate null
        return combineLatest(this.getInputs().map(i => $.observe(i)));
    }

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {?string} loglevel
     * @param {?string} prefix
     * @param {?*} value
     * @param {function(*)} setValue
     */
    update($, [loglevel, prefix, value], [setValue]) {
        DebugLog.log(loglevel, prefix, value);
        setValue(value);
    }

    /**
     * @param {?string} loglevel
     * @param {?string} prefix
     * @param {?*} value
     */
    static log(loglevel, prefix, value) {
        const validMethods = ['trace', 'debug', 'info', 'log', 'warn', 'error'];
        const method = validMethods[validMethods.indexOf(loglevel?.toLowerCase())] ?? 'info';
        getLogger('Draw')[method]((prefix ? prefix + ': ' : '') + String(value));
    }
}

registerBrick('016324e7338307c3ed94', DebugLog);
