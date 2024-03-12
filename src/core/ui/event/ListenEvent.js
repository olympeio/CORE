
/**
 * Copyright 2024 Olympe S.A.
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
import {map} from "rxjs/operators";

export default class ListenEvent extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        return $.observe(this.getInputs()[0]).pipe(map((_) => [null]));
    }

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {Array} inputs
     * @param {function(*)} setValue
     */
    update($, inputs, [forwardEvent]) {
        forwardEvent();
    }
}

registerBrick('018d18433b57d543b137', ListenEvent);
