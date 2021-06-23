import { FunctionBrick, registerBrick, instanceToTag } from 'olympe';
import {getLogger} from 'logging';

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
     * @param {function(InstanceTag)} setOrigin
     */
    onUpdate(context, [relation, origin, destination], [setOrigin]) {
        const logger = getLogger('Create Relation');

        // Validate arguments
        const relationTag = instanceToTag(relation);
        const originTag = instanceToTag(origin);
        if (relationTag === '') {
            logger.error('No relation specified');
            return;
        }
        if (originTag === '') {
            logger.error('No origin specified');
            return;
        }

        if (!(destination && destination.getTag())) {
            logger.error('Cannot update relation, destination is not an object');
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
                    logger.error('Isolated transaction (local) failed');
                } else {
                    // Set the output to the input object
                    // it is done inside the TransactionCallback to avoid firing potential following
                    // CreateRelation too early, which could cause errors in the orchestrator
                    setOrigin(origin);
                }
            }
        );
    }
}

registerBrick('01694800e25998fe5b81', CreateRelation);
