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

// This brick extends Brick, and not Brick, because it has not output control flow
export default class ThrowError extends Brick {

    /**
     * @override
     * This brick extends "Brick", but we want it to behave like an action, i.e. to be executed
     * when the input control flow is triggered, and not when all inputs are defined.
     * We must therefore override the setupExecution to change this behavior.
     */
    setupExecution($) {
        const [eventInput, message, code] = this.getInputs();
        // We observe the eventInput only
        return $.observe(eventInput).pipe(map((event) => {
            // Give default values to the message and the code number if none are provided
            // (this could have been done within the brick's update method as well)
            return event !== null
                ? [$.has(message) ? String($.get(message)) : '', $.has(code) ? Number($.get(code)) : 0]
                : null;
        }));
    }

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} message
     * @param {number} code
     * @param {function(ErrorFlow)} setErrorFlow
     */
    update(context, [message, code], [setErrorFlow]) {
        throw ErrorFlow.create(message, code);
    }
}

registerBrick('016eeb5ede9f3094d8fa', ThrowError);
