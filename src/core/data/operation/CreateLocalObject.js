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

import { Brick, registerBrick, Transaction, CloudObject, tagToString, BrickContext } from 'olympe';
import {getLogger} from 'logging';

export default class CreateLocalObject extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Tag} model
     * @param {function(CloudObject)} setObject
     */
    update(context, [model], [setObject]) {
        const logger = getLogger('Create Local Object');

        // Guards
        if (!tagToString(model) || !CloudObject.exists(model)) {
            logger.error(`Specified model (${model}) does not exist.`);
            return;
        }

        // start isolated local transaction
        const transaction = new Transaction(false);

        // And create operation to the transaction
        const instanceTag = transaction.create(model);

        // Execute the transaction
        transaction.execute()
            .then(() => setObject(CloudObject.get(instanceTag)))
            .catch(() => logger.error('Isolated transaction (local) failed'));

        // Destroy the local object when context is unloaded
        // WARNING: we register this callback independently if the Create transaction is performed by this "brick"
        //              or by an "end" transaction brick
        context.onClear(() => {
            // destroy the local object :
            //  - if it was created (if it was not the source should be undefined)
            //  - if it was not persisted (its source is self only)
            if (CloudObject.exists(instanceTag) && CloudObject.get(instanceTag).isPersisted()) {
                const reverseTransaction = new Transaction();
                reverseTransaction.delete(instanceTag);
                reverseTransaction.execute()
                    .catch(() => logger.error('Failed to delete local object. Investigate.'));
            }
        });
    }
}

registerBrick('016778ac951d2b536b23', CreateLocalObject);
