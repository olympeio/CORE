import {ActionBrick, instanceToTag, ListDef, registerBrick, Sync} from 'olympe';
import {addElementToList} from "./AddElementToListFunction";

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
        setList(addElementToList(inputList || [], object));
        forwardEvent();
    }
}

registerBrick('0179c7fea60380c20ff4', AddElementToListAction);
