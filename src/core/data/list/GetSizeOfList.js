import { FunctionBrick, registerBrick, Context, ListDef } from 'olympe';

/**
## Description
Returns the size of the provided list. That is the number of elements in that list.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Size | Number | The size of the list. |

**/
export default class GetSizeOfList extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list
     * @param {function(number)} setSize
     */
    onUpdate(context, [list], [setSize]) {
        if(Array.isArray(list)) {
            setSize(list.length);
        } else {
            list.getSize().subscribe(_size => {
                setSize(_size);
            });
        }
    }
}

registerBrick('016372362aac07c772f3', GetSizeOfList);
