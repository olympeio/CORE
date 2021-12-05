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

import { ActionBrick, registerBrick, ErrorFlow } from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Marks the end of a series of transaction operations. The transaction is then executed.
## Errors
| Code | Description |
| --- | --- |
| 1 | The transaction was rejected. |
**/
export default class EndTransaction extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} _
     * @param {function()} forwardEvent
     * @param {function(!ErrorFlow)} dispatchError
     */
    update(context, _, [forwardEvent, dispatchError]) {
        // Extract the current transaction from the context.
        const transaction = context.getParent().popTransaction();
        if (transaction === null) {
            getLogger('End Transaction').warn('End Transaction: no transaction begun');
            return;
        }

        transaction.execute((success, message) => {
            if (!success) {
                dispatchError(ErrorFlow.create(message || '', 1));
            } else {
                forwardEvent();
            }
        });
    }
}


registerBrick('0162f2ed1d1ba6349600', EndTransaction);
