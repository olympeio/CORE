import {FunctionBrick, registerBrick, ListDef, PropertyPrimitive, DBView, StringPrimitive, comparators, valuedefs, NumberPrimitive, DatetimePrimitive, BooleanPrimitive, transformers} from 'olympe';

/**
## Description
Generate a new list containing the elements of the provided list sorted in ascending or descending order
depending on the `asc` parameter.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object list | List | The list to sort. |
| Property | Property | The property of the elements to base the sort on. |
| ASC | Boolean | `true` to sort in ascending order, `false` for descending. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Sorted list | List | The resulting list. |

**/
export default class SortList extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list
     * @param {!Property} property
     * @param {boolean} ascending
     * @param {function(ListDef|Array)} setSortedList
     */
    onUpdate(context, [list, property, ascending], [setSortedList]) {
        // Guard
        if(!Array.isArray(list) && !(list instanceof ListDef)) {
            console.error('[SortList] TypeError: the list should be of type ListDef or Array');
            return;
        }

        const type = DBView.get().getUniqueRelated(property.getTag(), PropertyPrimitive.typeRel);
        let sortedList = list;
        let comparator = null;

        // String
        if (type === StringPrimitive.valueProp.getTag()) {
            comparator = new comparators.String(new valuedefs.StringProperty(property));
        // Number
        } else if (type === NumberPrimitive.valueProp.getTag()) {
            comparator = new comparators.Number(new valuedefs.NumberProperty(property));
        // Datetime
        } else if (type === DatetimePrimitive.valueProp.getTag()) {
            comparator = new comparators.DateTime(new valuedefs.DateTimeProperty(property));
        // Boolean
        } else if (type === BooleanPrimitive.valueProp.getTag()) {
            comparator = new comparators.Number(new valuedefs.BooleanProperty(property));
        }

        if (comparator !== null) {
            // Array of syncs
            if (Array.isArray(list)) {
                // TODO compare() to be exposed
                console.warn('[SortList] sorting for type Array is not yet supported');
                // sortedList = list.sort((a, b) => {
                //     const a_value = a.getProperty(property);
                //     const b_value = b.getProperty(property);
                //     return ascending ? comparator.compare(a_value, b_value) : comparator.compare(b_value, a_value);
                // });
            // ListDef
            } else {
                sortedList = list.transform(new transformers.Sort(comparator, ascending));
            }
        }
        setSortedList(sortedList);
    }
}

registerBrick('01673ff7da4292e70fc2', SortList);
