import { ActionBrick, registerBrick, Context, CreateInstance, UpdateInstance, Transaction, InstanceTag } from 'olympe';

/**
## Description
Deletes an object from the server's database.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The object to delete. |

**/
export default class DeleteObject extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!(CreateInstance | UpdateInstance | InstanceTag)} inboundObject
     * @param {function()} forwardEvent
     */
    onUpdate(context, [inboundObject], [forwardEvent]) {

        // Check if we can delete the inboundObject
        if (typeof inboundObject === 'string' ||
            inboundObject instanceof CreateInstance ||
            inboundObject instanceof UpdateInstance ||
            typeof inboundObject['getTag'] === 'function') {

            const transaction = new Transaction();

            transaction.delete(inboundObject);
            transaction.execute( (success, message) => {
                if (success) {
                    forwardEvent();
                } else {
                    console.error(`Cannot delete object : ${message}`);
                }
            })
        } else {
            console.error('Cannot delete object. The object is not of type Sync, CreateInstance or UpdateInstance', inboundObject )
        }
    }
}

registerBrick('0166e450adc75a1722c1', DeleteObject);
