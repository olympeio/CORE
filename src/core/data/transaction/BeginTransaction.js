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

import { ActionBrick, registerBrick, Transaction, GlobalProperties } from 'olympe';
import { getLogger } from 'logging';

/**!
 * %Tooltip: Begins a transaction.
 * %LongDesc
 * Marks the beginning of a series of transaction operations.
 */
export default class BeginTransaction extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} _
     * @param {function()} dispatchControlFlow
     */
    update($, _, [dispatchControlFlow]) {
        const parent$ = $.getParent();
        if(!parent$.has(GlobalProperties.TRANSACTION)) {
            parent$.set(GlobalProperties.TRANSACTION, new Transaction());
        }
        else {
            getLogger('Begin Transaction').error('trying to begin a transaction inside another begin in the same parent context');
        }
        dispatchControlFlow();
    }
}

registerBrick('0162f2ecd021046908f5', BeginTransaction);
