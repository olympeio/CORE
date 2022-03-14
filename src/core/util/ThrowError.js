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

import { Brick, registerBrick, ErrorFlow } from 'olympe';
import {map} from "rxjs/operators";

export default class ThrowError extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        const [eventInput, message, code] = this.getInputs();
        return $.observe(eventInput).pipe(map((event) => {
            return event !== null
                ? [$.has(message) ? String($.get(message)) : '', $.has(code) ? Number($.get(code)) : 0]
                : null;
        }));
    }

    /**
     * @protected
     * @param {!Context} context
     * @param {string} message
     * @param {number} code
     * @param {function(ErrorFlow)} setErrorFlow
     */
    update(context, [message, code], [setErrorFlow]) {
        setErrorFlow(ErrorFlow.create(message, code));
    }
}

registerBrick('016eeb5ede9f3094d8fa', ThrowError);
