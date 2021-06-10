
import {FunctionBrick, registerBrick, ListDef} from 'olympe';

/**
## Description
Merge two lists.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| First list | List | First list. |
| Second list | List | Second list. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Concatenated list | List | The concatenation of First and Second list. |

**/
export default class ConcatList extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list1
     * @param {!ListDef|!Array} list2
     * @param {function(!ListDef|!Array)} setConcatenatedList
     */
    onUpdate(context, [list1, list2], [setConcatenatedList]) {
        // Guards
        if(!Array.isArray(list1) && !(list1 instanceof ListDef)) {
            console.error('[ConcatList] TypeError: the list1 should be of type ListDef or Array');
            return;
        }
        if(!Array.isArray(list2) && !(list2 instanceof ListDef)) {
            console.error('[ConcatList] TypeError: the list2 should be of type ListDef or Array');
            return;
        }

        if(Array.isArray(list1) && Array.isArray(list2)) {
            setConcatenatedList(list1.concat(list2));
        } else if(!Array.isArray(list1) && !Array.isArray(list2)) {
            setConcatenatedList(list1.union(list2));
        } else {
            console.error('[ConcatList] TypeError: both list should be of the same type');
        }
    }
}

registerBrick('01717d5fbc55ea0d361b', ConcatList);
