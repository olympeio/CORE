
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
    onUpdate(context, [origin, destination, relation], [forwardEvent, setOrigin]) {
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
