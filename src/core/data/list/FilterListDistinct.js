
import { FunctionBrick, registerBrick, Context, ListDef, Distinct } from 'olympe';

/**
## Description
Filter out duplicate items from a list. The object tags are used to identify duplicates.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object list | List | List with duplicate items to filter out. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Filtered list | List | The filtered list without duplicate items. |

**/
export default class FilterListDistinct extends FunctionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {!Array|!ListDef} list
     * @param {function(!Array|!ListDef)} setList
     */
    onUpdate(context, [list], [setList]) {
        if(Array.isArray(list)){
            setList(Array.from(new Set(list)));
        } else {
            setList(list.transform(new Distinct()));
        }
    }
}

registerBrick('0171839084d99a3f99e1', FilterListDistinct);
