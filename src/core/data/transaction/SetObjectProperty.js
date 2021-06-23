import {ActionBrick, registerBrick, Sync} from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Assigns a value to a specific property of an object.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The object. |
| property | Property | The property. |
| value | Object | The value. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The Object. |

**/
export default class SetObjectProperty extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} object
     * @param {PropertyDescriptor} property
     * @param {*} value
     * @param {function()} forwardEvent
     * @param {function(InstanceTag)} setObject
     */
    onUpdate(context, [object, property, value], [forwardEvent, setObject]) {
        const logger = getLogger('Set Object Property');

        // Validate arguments
        if (value instanceof Sync) {
            logger.error('Complex properties are not supported');
            return;
        }

        // Transaction
        const transaction = context.getTransaction();

        transaction.update(object, property, value);

        context.releaseTransaction((executed, success, message) => {
            if (!success) {
                logger.error(`Transaction error: ${message}`);
            }
            setObject(object);
            forwardEvent();
        });
    }
}

registerBrick('01632a7cbe87ca19c5f1', SetObjectProperty);
