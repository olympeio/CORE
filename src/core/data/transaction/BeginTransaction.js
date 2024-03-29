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

import { ActionBrick, registerBrick, Transaction, GlobalProperties, BrickContext } from 'olympe';
import { getLogger } from 'logging';

export default class BeginTransaction extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} _
     * @param {function()} forwardEvent
     */
    update($, _, [forwardEvent]) {
        const parent$ = $.getParent();
        if (!parent$.has(GlobalProperties.TRANSACTION)) {
            parent$.set(GlobalProperties.TRANSACTION, new Transaction());
        } else {
            getLogger('Begin Transaction').error('Try to begin a transaction inside another begin in the same parent context');
        }
        forwardEvent();
    }
}

registerBrick('0162f2ecd021046908f5', BeginTransaction);
