
import { FunctionBrick, registerBrick, Limit } from 'olympe';

/**
## Description
Get objects from a list in a specific range. All items with a rank going from `Start` to `End` (limits included) are
included in the output list.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object list | List | The list from which to take objects. |
| Start | Number | Lower range index. |
| End | Number | Upper range index. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Sublist | List | The sublist. |

**/
export default class FilterListRange extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list the list to be filtered
     * @param {!number} startIndex
     * @param {!number} endIndex
     * @param {!function(ListDef|Array)} setList
     */
    onUpdate(context, [list, startIndex, endIndex], [setList]) {
        const count = endIndex - startIndex + 1;
        if (count > 0) {
            if(Array.isArray(list)){
                list.slice(startIndex, startIndex+count)
            } else {
                setList(list.transform(new Limit(startIndex, count)));
            }
        } else {
            console.warn('endIndex is smaller than startIndex, list is not filtered');
            setList(list);
        }
    }
}

registerBrick('01717d5f60be1607fb43', FilterListRange);
