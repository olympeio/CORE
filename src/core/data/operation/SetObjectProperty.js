import { FunctionBrick, registerBrick, Transaction, Sync } from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Sets the value of a specific property for the provided object.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The object to update. |
| property | Property | The property to update. |
| value | Object | The value to set the property with. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The object. |

**/
export default class SetObjectProperty extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} object
     * @param {PropertyDescriptor} property
     * @param {*} value
     * @param {function(InstanceTag)} setObject
     */
    onUpdate(context, [object, property, value], [setObject]) {
        const logger = getLogger('Set Object Property');

        // Validate arguments
        if (value instanceof Sync) {
            logger.error('Complex properties are not supported');
            return;
        }

        // Start isolated local transaction
        const transaction = new Transaction();
        transaction.update(object, property, value);

        // Execute the transaction
        transaction.execute(success => {
            if (!success) {
                logger.error('Update transaction failed');
            } else {
                // Set the output to the input object
                // it is done inside the TransactionCallback to avoid firing potential following
                // SetObjectProperty too early, which could cause errors in the orchestrator
                setObject(object);
            }
        });
    }
}

registerBrick('016778ac9fcc6032ce1d', SetObjectProperty);
