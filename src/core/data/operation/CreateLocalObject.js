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
