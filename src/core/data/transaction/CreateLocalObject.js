
import {ActionBrick, registerBrick, Context, Sync, instanceToTag} from 'olympe';

/**
## Description
Creates a local instance (not yet persisted in the database) of a model.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| model | Model | The model. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The created object or its tag if used inside a Begin/End. |

**/
export default class CreateLocalObject extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Sync} model
     * @param {function()} forwardEvent
     * @param {function(!Sync)} setObject
     */
    onUpdate(context, [model], [forwardEvent, setObject]) {
        // Guards
        if (!instanceToTag(model)) {
            console.warn('[CreateLocalObject] no model specified');
            return;
        }

        // Transaction
        const instance = context.getTransaction().create(model).persist(false);
        context.releaseTransaction((executed, success, message) => {
            if(executed && !success)
                console.error(`[CreateLocalObject] transaction error: ${message}`);
            setObject(executed ? Sync.getInstance(instance) : instance);
            forwardEvent();
        });
    }
}

registerBrick('0162f2e963b6c9ed85b7', CreateLocalObject);
