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

import { Brick, registerBrick, ErrorFlow, GlobalProperties, CloudObject, BrickContext } from 'olympe';
import { getLogger } from 'logging';

export default class EndTransaction extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} _
     * @param {function()} forwardEvent
     * @param {function(!ErrorFlow)} setErrorFlow
     * @param {function(!Array<!CloudObject>)} setCreatedObjects
     */
    update($, _, [forwardEvent, setErrorFlow, setCreatedObjects]) {
        const parent$ = $.getParent();
        if (parent$.has(GlobalProperties.TRANSACTION)) {
            const t = parent$.get(GlobalProperties.TRANSACTION);
            parent$.remove(GlobalProperties.TRANSACTION);
            t.execute().then((result) => {
                setCreatedObjects(result.getCreatedObjects());
                forwardEvent();
            }).catch((message) => setErrorFlow(ErrorFlow.create(`End Transaction: ${message}`, 1)));
        }
        else {
            getLogger('End Transaction').warn('no transaction begun in the parent context. Ignore the operation...');
            forwardEvent();
        }
    }
}


registerBrick('0162f2ed1d1ba6349600', EndTransaction);
