/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { FunctionBrick, registerBrick, DBView, Transaction, Sync } from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Creates an instance of the specified model. It is said to be `local` because it is not yet persisted in the main
database. See `Persist Object` for how to persist in the database a newly created local object.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| model | Model | The model of the instance. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The created instance. |
**/
export default class CreateLocalObject extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} model
     * @param {function(Sync)} setObject
     */
    onUpdate(context, [model], [setObject]) {
        const logger = getLogger('Create Local Object');

        // start isolated local transaction
        const transaction = new Transaction();
        transaction.persist(false);

        // And create operation to the transaction
        const instanceTag = transaction.create(model).persist(false).getTag();

        // Execute the transaction
        transaction.execute((success) => {
            if (!success) {
                logger.error('Isolated transaction (local) failed');
            } else {
                setObject(Sync.getInstance(instanceTag));
            }
        });

        // Destroy the local object when context is unloaded
        // WARNING: we register this callback independently if the Create transaction is performed by this "brick"
        //              or by an "end" transaction brick
        context.onDestroy(() => {
            // destroy the local object :
            //  - if it was created (if it was not the source should be undefined)
            //  - if it was not persisted (its source is self only)
            const dbView = DBView.get();
            if (dbView.exist(instanceTag) && !dbView.isPersisted(instanceTag)) {
                const reverseTransaction = new Transaction();
                reverseTransaction.delete(instanceTag);
                reverseTransaction.execute(success => {
                    if (!success) {
                        logger.error('Failed to delete local object. Investigate.');
                    }
                });
            }
        });
    }
}

registerBrick('016778ac951d2b536b23', CreateLocalObject);
