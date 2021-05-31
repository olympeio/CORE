
import { FunctionBrick, registerBrick, Context, ListDef, PropertyDescriptor,
    DBView, predicates, valuedefs } from "olympe";
import getValueDefFor from "./getValueDefFor";

/**
## Description
This function filters out a list to generate a list that will contain objects from the original only when their
the value of the specified string property contains the specified string.
**Example:** All the customers who's first name contains 'John'.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list to filter. |
| Property | Property | The property to test. |
| Substring | String | The string to look for. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The resulting list. |

**/
export default class FilterListContains extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} inputs
     * @param {!Array} outputs
     */
    onUpdate(context, [list, property, value], [setFiltered]) {
        const valueDef = getValueDefFor(property);

        if (valueDef === null) {
            const name = DBView.get().name(/** @type {!HasInstanceTag} */ (property));
            console.warn(`Type of property ${name} is not supported. List will not be filtered.`);
            setFiltered(list);
            return;
        }

        setFiltered(list.filter(predicates.Contains(valueDef, valuedefs.Constant(value))));

    }
}

registerBrick('01673ff7ce3169f42a81', FilterListContains);
