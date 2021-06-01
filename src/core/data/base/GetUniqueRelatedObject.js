
import { FunctionBrick, registerBrick, Context, Sync, DBView, RelationPrimitive, Direction, instanceToTag, transformers } from 'olympe';

/**
## Description
Retrieves the first object connected to the specified object via a relation.
Note: The direction of the relation is not taken into account.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | Object | The origin object. |
| Relation | Relation | The relation. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The related object. |

**/
export default class GetUniqueRelatedObject extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} inputs
     * @param {!Array} outputs
     */
    onUpdate(context, [object, relation], [setObject]) {
        const objectTag = instanceToTag(object);
        const relationTag = instanceToTag(relation);

        // Prevent errors if an object with an invalid type was provided
        if (objectTag === '' || relationTag === '') {
            console.error('GetUniqueRelatedObject: Invalid type provided as input');
            return;
        }

        const relationSync = Sync.getInstance(relationTag);
        const objectSync = Sync.getInstance(objectTag);

        const originModelRelation = RelationPrimitive.originModelRel;
        relationSync.getFirstRelated(
            new transformers.Related(originModelRelation.getTag(), originModelRelation.getDirection())
        ).subscribe((origin) => {
            // Auto detect the direction in which the relation should be followed :
            // -> assess whether the provided object is an instance of the relation's origin
            // In case the relation as the same model as origin and destination, the only supported
            // behaviour is origin -> destination (COM-1042)
            const direction = DBView.get().getExtendedModels(objectSync.getModelTag()).includes(origin.getTag())
                ? Direction.DESTINATION // the provided instance corresponds to the origin of the relation, so we follow the relation towards the destination
                : Direction.ORIGIN; // the provided instance corresponds to the destination of the relation, so we follow the relation towards the origin

            objectSync.getFirstRelated(new transformers.Related(relationTag, direction)).subscribe(setObject);
        });
    }
}

registerBrick('0167c09126e60d1955fe', GetUniqueRelatedObject);
