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

import { Brick, registerBrick, Process, ErrorFlow } from 'olympe';
import {tap} from "rxjs/operators";
import {take, merge, timer} from "rxjs";
import {getLogger} from "logging";

export default class RegisterHealthCheck extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Brick} check
     * @param {?number} timeout
     * @param {?string} name
     * @param {?string} probeType
     * @param {function()} forwardEvent
     */
    update($, [check, timeout, name, probeType], [forwardEvent]) {
        if (!(check instanceof Brick)) {
            getLogger('RegisterHealthCheck').warn('No health check implementation provided.');
            forwardEvent();
            return;
        }
        const finalName = typeof name === 'string' ? name : 'Custom health check';
        const finalTimeout = typeof timeout === 'number' ? Math.max(timeout, 0) : 1000;

        const off = Process.onHealthCheck(() => this.process($, check, finalTimeout, finalName), {type: probeType});
        $.onClear(off);
        forwardEvent();
    }

    /**
     * @private
     * @param {!BrickContext} $
     * @param {!Brick} check
     * @param {number} timeout
     * @param {string} name
     * @return {!Promise<string>}
     */
    process($, check, timeout, name) {
        const [startInput] = check.getInputs();
        const [healthyOutput, errorOutput] = check.getOutputs();
        const $check = $.runner(check).trigger(startInput);

        return new Promise((resolve, reject) => {
            const ctrlFlow = $check.observe(healthyOutput).pipe(tap(() => {
                resolve(`${name} OK`);
            }));
            const errorFlow = $check.observe(errorOutput).pipe(tap((error) => {
                 reject(`${name} ${error instanceof ErrorFlow ? error.getMessage() : error}`);
            }));
            const timeoutFlow = timer(timeout).pipe(tap(() => {
                reject(`Timeout ${name}`);
            }));

            // Take one value either from the control flow or from the error flow outputs.
            merge(ctrlFlow, errorFlow, timeoutFlow).pipe(take(1)).subscribe();
        }).finally(() => $check.destroy());
    }
}

registerBrick('0185792773abd926fe83', RegisterHealthCheck);
