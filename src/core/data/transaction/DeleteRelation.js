
import { ActionBrick, registerBrick, Context } from 'olympe';

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
     * @param {!Array} inputs
     * @param {!Array<function(any)>} outputs
     */
    onUpdate(context, [origin, relation, destination], [setOrigin, dispatchControlFlow]) {
        // Get current transaction
        const transaction = context.getTransaction();

        // Delete the specified relation
        transaction.deleteRelation(relation, origin, destination);

        // Release or execute the transaction
        context.releaseTransaction(() => {
            setOrigin(origin);
            dispatchControlFlow();
        });
    }
}

registerBrick('01681960628b0d391ad6', DeleteRelation);
