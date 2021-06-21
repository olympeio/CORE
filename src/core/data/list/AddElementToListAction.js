import {ActionBrick, instanceToTag, ListDef, registerBrick, Sync} from 'olympe';

/**
## Description
Adds en element to a list. If no list is provided, it is created.

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
export default class AddElementToListAction extends ActionBrick {

    /**
     * Executed every time the brick receives a new trigger event.
     * Note that the method will be executed _even if_ an input (list, object) is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {!ListDef|!Array} inputList
     * @param {!Sync|!Object} object
     * @param {function()} forwardEvent
     * @param {function(!ListDef|!Array)} setList
     */
    onUpdate(context, [inputList, object], [forwardEvent, setList]) {
        const list = inputList || [];

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
        setList(Array.isArray(list)
            ? Array.from(list).push(object) // Generate new array
            : list.union(new ListDef(instanceToTag(object), [])) // New listdef: union of the previous + 1 instance.
        );

        // Done
        forwardEvent();
    }
}

registerBrick('0179c7fea60380c20ff4', AddElementToListAction);
