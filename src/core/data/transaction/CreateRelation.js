
import {ActionBrick, registerBrick, Context, Sync, Relation, Transaction, instanceToTag} from 'olympe';

/**
## Description
Creates a specified relation between 2 given objects.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The origin object. |
| relation | Relation | The relation. |
| destination | Object | The destination object. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The origin Object. |

**/
export default class CreateRelation extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Sync} origin
     * @param {!Relation} relation
     * @param {!Sync} destination
     * @param {function()} forwardEvent
     * @param {function(!Sync)} setOrigin
     */
    onUpdate(context, [relation, origin, destination], [forwardEvent, setOrigin]) {
        // Guards
        if (instanceToTag(relation) === '') {
            console.error('[CreateRelation] no relation specified');
            return;
        }
        if (instanceToTag(origin) === '') {
            console.error('[CreateRelation] no origin object specified');
            return;
        }
        if (instanceToTag(destination) === '') {
            console.error('[CreateRelation] no destination object specified');
            return;
        }

        // Transaction
        context.getTransaction().createRelation(relation, origin, destination);
        context.releaseTransaction((executed, success, message) => {
            if(executed && !success)
                console.error(`[CreateRelation] transaction error: ${message}`);
            forwardEvent();
        });
    }
}

registerBrick('01694800e25a7c39f7b0', CreateRelation);
