import { ActionBrick, registerBrick, Context, InstanceTag, CreateInstance, instanceToTag } from 'olympe';
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
export default class PersistObject extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} objectIn
     * @param {function()} forwardEvent
     * @param {function(InstanceTag)} setObjectOut
     */
    onUpdate(context, [objectIn], [forwardEvent, setObjectOut]) {
        const transaction = context.getTransaction();

        if (objectIn instanceof CreateInstance || instanceToTag(objectIn) !== '') {
            transaction.persistInstance(objectIn);
            context.releaseTransaction( () => {
                setObjectOut(objectIn);
                forwardEvent();
            });
        } else {
            getLogger('Persist Object').error('Cannot persist object', objectIn);
            setObjectOut(objectIn);
            forwardEvent();
        }
    }
}

registerBrick('0162f670ececab67c134', PersistObject);
