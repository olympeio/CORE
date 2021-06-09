import { FunctionBrick, registerBrick, Sync, DBView, RelationPrimitive, Direction, ListDef, instanceToTag, transformers } from 'olympe';

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
     * @param {!InstanceTag} object
     * @param {!InstanceTag} relation
     * @param {function(Sync)} setObject
     */
    onUpdate(context, [object, relation], [setObject]) {
        // Prevent errors if an object with an invalid type was provided
        if (instanceToTag(object) === '' || instanceToTag(relation) === '') {
            console.error('GetUniqueRelatedObject: Invalid type provided as input');
            return;
        }

        const db = DBView.get();

        // NB Relation here is a instance of Relation
        // Get model at origin of relation
        const originModel = db.getUniqueRelated(relation, RelationPrimitive.originModelRel);

        // Auto detect the direction in which the relation should be followed : assess whether the provided object is an instance of the relation's origin
        // In case the relation as the same model as origin and destination, the only supported behaviour is origin -> destination (COM-1042)
        const direction = originModel === db.model(object) ? Direction.DESTINATION : Direction.ORIGIN;

        const orientedRelation = new transformers.Related(relation, direction);
        const relatedObjects = new ListDef(object, orientedRelation);
        relatedObjects.observeSize().subscribe((size) => {
            if (size.value > 1) {
                console.warn(`${db.name(db.model(object))} ${instanceToTag(object)} is related to ${size.value} objects through relation ${db.name(relation)}`);
            }
        })
        relatedObjects.observeFirst().subscribe(setObject);
    }
}

registerBrick('0167c09126e60d1955fe', GetUniqueRelatedObject);
