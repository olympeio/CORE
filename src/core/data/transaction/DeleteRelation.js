
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

import { ActionBrick, registerBrick } from 'olympe';

/**
## Description
Delete the specified relation between 2 given objects.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The origin object. |
| relation | Relation | The relation. |
| destination | Object | The destination object. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The origin Object. |

**/
export default class DeleteRelation extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Sync} origin
     * @param {!Sync} destination
     * @param {!Relation} relation
     * @param {function()} forwardEvent
     * @param {function(!Sync)} setOrigin
     */
    update(context, [origin, destination, relation], [forwardEvent, setOrigin]) {
        // Get current transaction
        const transaction = context.getTransaction();

        // Delete the specified relation
        transaction.deleteRelation(relation, origin, destination);

        // Release or execute the transaction
        context.releaseTransaction(() => {
            setOrigin(origin);
            forwardEvent();
        });
    }
}

registerBrick('01681960628b0d391ad6', DeleteRelation);
