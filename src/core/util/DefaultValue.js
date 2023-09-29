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
import {catchError, from, merge, of} from "rxjs";
import {map, switchMap} from "rxjs/operators";

export default class Defaultvalue extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        const inputs = this.getInputs();
        return merge(...inputs.map((i) => $.observe(i))).pipe(map((_) => {
            if (!$.has(inputs[1])) {
                return null; // Clear the brick when the default value has been cleared.
            }
            //Original implementation
            //return [$.get(inputs[0]), $.get(inputs[1])]; // Return [value, defaultValue]

            //Used rxjs
            //It stops the breaking of DRAW by catching the error before it breaks
            return from($.get(inputs[0])).pipe(
                catchError(error => {
                    console.error('Error fetching value:', error);
                    return of(null);
                }),
                switchMap(value => {
                    return from($.get(inputs[1])).pipe(
                        catchError(error => {
                            console.error('Error fetching defaultValue:', error);
                            return of(null);
                        }),
                        map(defaultValue => [value, defaultValue])
                    );
                })
            );
        }));
    }

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!*} defaultValue
     * @param {!*} value
     * @param {function(!*)} setValue
     */
    update(context, [value, defaultValue], [setValue]) {
        setValue(value !== undefined && value !== null ? value : defaultValue);
    }
}

registerBrick('016ab6f231b7803c429a', Defaultvalue);
