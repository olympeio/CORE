import { FunctionBrick, registerBrick, ListDef, DBView, predicates, valuedefs } from "olympe";
import getValueDefFor from "./getValueDefFor";
import {getLogger} from 'logging';

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
     * @param {!PropertyDescriptor} property
     * @param {!ListDef|Array} list
     * @param {!*} substring
     * @param {function(ListDef|Array)} setFiltered
     */
    onUpdate(context, [property, list, substring], [setFiltered]) {
        const valueDef = getValueDefFor(property);
        const logger = getLogger('Filter List Contains');

        if (valueDef === null) {
            const name = DBView.get().name(/** @type {!HasInstanceTag} */ (property));
            logger.warn(`Type of property ${name} is not supported. List will not be filtered.`);
            setFiltered(list);
            return;
        }

        if (typeof(substring) !== 'string') {
            logger.warn('The type of `substring` is not supported, iut should be a string.');
            setFiltered(list);
            return;
        }

        if (list instanceof ListDef) {
            setFiltered(list.filter(new predicates.Contains(valueDef, new valuedefs.Constant(substring))));
        } else if (Array.isArray(list)) {
            setFiltered(list.filter(item => {
                const itemPropValue = DBView.get().getProperty(item.getTag(), property);
                return itemPropValue.includes(substring);
            }));
        } else {
            logger.error(`TypeError: The list should be of type ListDef or Array`);
        }
    }
}

registerBrick('01673ff7ce3169f42a81', FilterListContains);
