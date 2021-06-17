import { ActionBrick, registerBrick } from 'olympe';

/**
## Description
Deletes all the relations of the specific type originating from an object.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The origin object. |
| relation | Relation | The relation type. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The origin Object. |
**/
export default class DeleteAllRelations extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} origin
     * @param {Relation} relation
     * @param {function()} forwardEvent
     * @param {function(InstanceTag)} setOrigin
     */
    onUpdate(context, [origin, relation], [forwardEvent, setOrigin]) {
        // Get current transaction
        const transaction = context.getTransaction();

        // Delete the specified relations
        // WARNING : it does not propagate the deletion !
        transaction.deleteAllRelations(relation, origin);

        // Release or execute the transaction
        context.releaseTransaction(() => {
            setOrigin(origin);
            forwardEvent();
        });
    }
}

registerBrick('01681979b58936d73d5f', DeleteAllRelations);
