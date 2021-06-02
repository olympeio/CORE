import { ActionBrick, registerBrick, Context, CreateInstance, UpdateInstance, Sync, Transaction } from 'olympe';

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
     * @param {!Array} inputs
     * @param {!Array} outputs
     */
    onUpdate(context, [inboundObject], [forwardEvent]) {

        // Check if we can delete the inboundObject
        if (inboundObject instanceof CreateInstance ||
            inboundObject instanceof UpdateInstance ||
            inboundObject instanceof Sync) {

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
