import { FunctionBrick, registerBrick, instanceToTag } from 'olympe';
import {getRelatedObjects} from "../list/GetRelatedObjects";

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
        // Prevent errors
        if (instanceToTag(object) === '') {
            console.error('Get Related Objects: Invalid `object` provided');
            return;
        } else if (instanceToTag(relation) === '') {
            console.error('Get Related Objects: Invalid `relation` provided');
            return;
        }

        const relatedObjects = getRelatedObjects(object, relation);
        relatedObjects.observeSize().subscribe((size) => {
            if (size.value > 1) {
                console.warn(`${db.name(db.model(object))} ${instanceToTag(object)} is related to ${size.value} objects through relation ${db.name(relation)}`);
            }
        });
        relatedObjects.observeFirst().subscribe(setObject);
    }
}

registerBrick('0167c09126e60d1955fe', GetUniqueRelatedObject);
