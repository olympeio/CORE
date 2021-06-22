
import {FunctionBrick, registerBrick, ListDef} from 'olympe';

/**
## Description
Get all entries of a list. First, get all entries existing before the execution of this function. Then, continuously
get all new entries added to the watched list.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list from which to get entries. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Entry | Object | A single list entry. |
**/
export default class ListForEachEntries extends FunctionBrick {

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
        if(Array.isArray(list) || list instanceof ListDef) {
            list.forEach(object => setObject(object));
        } else {
            getLogger('List For Each Entries').error('TypeError: The list should be of type ListDef or Array');
        }
    }
}

registerBrick('01718897a585de88f500', ListForEachEntries);
