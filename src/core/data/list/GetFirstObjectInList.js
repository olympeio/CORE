
import { FunctionBrick, registerBrick, ListDef } from 'olympe';

/**
## Description
Get the first entry from the provided list.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | Object | The first object. |

**/
export default class GetFirstObjectInList extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list
     * @param {function(object)} setObject
     */
    onUpdate(context, [list], [setObject]) {
        if(Array.isArray(list)) {
            setObject(list[0]);
            if (list.length > 0) {
                setObject(list[0]);
            } else {
                console.warn('OutOfBound: trying to return the first element of an empty array!');
            }
        } else if (list instanceof ListDef) {
            list.observeFirst().subscribe(_object => {
                setObject(_object);
            });
        } else {
            console.error('TypeError: The list should be of type ListDef or Array');
        }
    }
}

registerBrick('016324f5c97a5bb2892b', GetFirstObjectInList);
