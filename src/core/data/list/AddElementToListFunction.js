import {FunctionBrick, registerBrick, ListDef, Sync, instanceToTag} from 'olympe';

/**
## Description
Adds en element to a list.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list in which the element will be added. |
| Object | Object | The element to add. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The result list, with the added element. |
**/
export default class AddElementToListFunction extends FunctionBrick {

    /**
     * Executed every time an input (list, object) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {!ListDef|!Array} list
     * @param {!Sync|!Object} object
     * @param {function(!ListDef|!Array)} setList
     */
    onUpdate(context, [list, object], [setList]) {
        // Guards
        if (!Array.isArray(list) && !(list instanceof ListDef)) {
            console.error('[AddElementToList] TypeError: the list should be of type ListDef or Array');
            return;
        }
        if (list instanceof ListDef && !(object instanceof Sync)) {
            console.error('[AddElementToList] TypeError: only a Sync can be added to a ListDef');
            return;
        }

        // Addition
        let newList;
        if (Array.isArray(list)) {
            newList = Array.from(list); // Generate shallow copy of the array
            newList.push(object);
        } else {
            newList = list.union(new ListDef(instanceToTag(object), [])); // New listdef: union of the previous + 1 instance.
        }

        // Done
        setList(newList);
    }
}

registerBrick('0179c7aee952dc922de1', AddElementToListFunction);
