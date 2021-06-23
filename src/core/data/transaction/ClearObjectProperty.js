import {ActionBrick, registerBrick, Context, Sync} from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Clear a specific property of an object.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The object. |
| property | Property | The property to clear. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The result object. |

**/
export default class ClearObjectProperty extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} object
     * @param {PropertyDescriptor} property
     * @param {function()} forwardEvent
     * @param {function(InstanceTag)} setObject
     */
    onUpdate(context, [object, property], [forwardEvent, setObject]) {
        const logger = getLogger('Clear Object Property');

        // Transaction
        const transaction = context.getTransaction();

        transaction.update(object, property, null);

        context.releaseTransaction((executed, success, message) => {
            if (!success) {
                logger.error(`Transaction error: ${message}`);
            }
            setObject(object);
            forwardEvent();
        });
    }
}

registerBrick('017a382f3df9e2dcb12a', ClearObjectProperty);
