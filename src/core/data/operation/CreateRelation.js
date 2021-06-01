import { FunctionBrick, registerBrick, instanceToTag } from 'olympe';

/**
## Description
Creates a new relation connecting the two provided objects.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The object at the origin of the relation. |
| destination | Object | The object at the destination. |
| relation | Relation | The relation type. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The origin object. |
**/
export default class CreateRelation extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} origin
     * @param {InstanceTag} relation
     * @param {InstanceTag} destination
     * @param {function(InstanceTag)} setObject
     */
    onUpdate(context, [origin, relation, destination], [setObject]) {
        // Validate arguments
        const relationTag = instanceToTag(relation);
        const originTag = instanceToTag(origin);
        if (relationTag === '') {
            console.error('CreateRelation: no relation specified');
            return;
        }
        if (originTag === '') {
            console.error('CreateRelation: no origin specified');
            return;
        }

        if (!(destination && destination.getTag())) {
            console.error('CreateRelation: cannot update relation, destination is not an object');
            return;
        }

        // start isolated local transaction
        const transaction = context.getTransaction();

        // Add transaction operation
        // Note: the relation direction is automatically treated
        transaction.createRelation(relation, origin, destination);

        // Execute the transaction
        transaction.execute(
            success => {
                if (!success) {
                    console.error('CreateRelation: isolated transaction (local) failed');
                } else {
                    // Set the output to the input object
                    // it is done inside the TransactionCallback to avoid firing potential following
                    // CreateRelation too early, which could cause errors in the orchestrator
                    setObject(origin);
                }
            }
        );
    }
}

registerBrick('01694800e25998fe5b81', CreateRelation);
