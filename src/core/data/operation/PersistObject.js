
import { FunctionBrick, registerBrick, Context, Transaction, CreateInstance, Sync } from 'olympe';

/**
 ## Description
 Persists a local object into the server's database.

 ## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | object | Object | The object to persist. |
 ## Outputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | object | Object | The persisted object. |

 **/
export default class PersistObject extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} inputs
     * @param {!Array} outputs
     */
    onUpdate(context, [objectIn], [setObjectOut]) {

        const transaction = new Transaction();

        if (objectIn instanceof CreateInstance || objectIn instanceof Sync) {
            transaction.persistInstance(objectIn);
            transaction.execute( (success, message) => {
                if (success) {
                    setObjectOut(objectIn);
                } else {
                    console.error(message);
                    setObjectOut(objectIn);
                }
            })
        } else {
            console.error('PersistObject cannot persist the object', objectIn);
            setObjectOut(objectIn);
        }
    }
}

registerBrick('016c1f1db7d28b4f6db6', PersistObject);
