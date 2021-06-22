import { FunctionBrick, registerBrick, Transaction, CreateInstance, instanceToTag } from 'olympe';
import {getLogger} from 'logging';

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
     * @param {InstanceTag} objectIn
     * @param {function(InstanceTag)} setObjectOut
     */
    onUpdate(context, [objectIn], [setObjectOut]) {
        const transaction = new Transaction();
        const logger = getLogger('Persist Object');

        if (objectIn instanceof CreateInstance || instanceToTag(objectIn) !== '') {
            transaction.persistInstance(objectIn);
            transaction.execute( (success, message) => {
                if (success) {
                    setObjectOut(objectIn);
                } else {
                    logger.error(message);
                    setObjectOut(objectIn);
                }
            })
        } else {
            logger.error('Cannot persist object', objectIn);
            setObjectOut(objectIn);
        }
    }
}

registerBrick('016c1f1db7d28b4f6db6', PersistObject);
