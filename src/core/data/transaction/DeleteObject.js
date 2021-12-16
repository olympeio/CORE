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

import { ActionBrick, registerBrick, CreateInstance, UpdateInstance, Transaction } from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Deletes an object from the server's database.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The object to delete. |

**/
export default class DeleteObject extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!(CreateInstance | UpdateInstance | InstanceTag)} inboundObject
     * @param {function()} forwardEvent
     */
    update(context, [inboundObject], [forwardEvent]) {
        const logger = getLogger('Delete Object');

        // Check if we can delete the inboundObject
        if (typeof inboundObject === 'string' ||
            inboundObject instanceof CreateInstance ||
            inboundObject instanceof UpdateInstance ||
            typeof inboundObject['getTag'] === 'function') {

            const transaction = new Transaction();

            transaction.delete(inboundObject);
            transaction.execute( (success, message) => {
                if (success) {
                    forwardEvent();
                } else {
                    logger.error(`Cannot delete object : ${message}`);
                }
            })
        } else {
            logger.error('Cannot delete object. The object is not of type Sync, CreateInstance or UpdateInstance', inboundObject )
        }
    }
}

registerBrick('0166e450adc75a1722c1', DeleteObject);
