
import { FunctionBrick, registerBrick, ListDef, DBView, predicates, valuedefs } from "olympe";
import getValueDefFor from "./getValueDefFor";

/**
## Description
This function filters out a list by comparing a specific object's property to a given value. It generates a new list
that contains only the objects whose property is equal to the filtering value. For the moment, only the following
property/value types are supported: string, number, boolean, and datetime.

**Example**: All the customers who are not married.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| list | List | The list to filter. |
| property | Property | The property to test. |
| filter | Object | The value to compare with. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| list | List | The resulting list. |

**/
export default class FilterListEquals extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef} list
     * @param {!PropertyDescriptor} property
     * @param {string | number | Date} value
     * @param {function(!ListDef)} setFiltered
     */
    onUpdate(context, [list, property, value], [setFiltered]) {
        if (!(list instanceof ListDef)) {
            console.error(`[FilterListEqual] list is not a ListDef. Ignored.`);
            return;
        }
        const valueDef = getValueDefFor(property);

        if (valueDef === null) {
            const name = DBView.get().name(/** @type {!HasInstanceTag} */ (property));
            console.warn(`Type of property ${name} is not supported. List will not be filtered.`);
            setFiltered(list);
            return;
        }

        setFiltered(list.filter(new predicates.Equals(valueDef, new valuedefs.Constant(value))));
    }
}

registerBrick('01674138206e8fde93fb', FilterListEquals);
