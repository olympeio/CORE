import { FunctionBrick, registerBrick, ListDef } from 'olympe';

/**
## Description
Gets the object that is at the specified rank in the list.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| list | List | The list. |
| index | Number | The index of the object. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The retrieved object. |

**/
export default class GetObjectAtInList extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} rank
     * @param {!ListDef|!Array} list
     * @param {function(object)} setObject
     */
    onUpdate(context, [rank, list], [setObject]) {
        if (Array.isArray(list)) {
            if (list.length > rank) {
                setObject(list[rank]);
            } else {
                console.warn(`OutOfBound: trying to return a value outside of the array! (rank=${rank}, arrayLength=${list.length})`);
            }
        } else if (list instanceof ListDef) {
            list.observeAt(rank).subscribe(_object => {
                setObject(_object);
            });
        } else {
            console.error('TypeError: The list should be of type ListDef or Array');
        }
    }
}

registerBrick('016657e42a28d418fcbd', GetObjectAtInList);
