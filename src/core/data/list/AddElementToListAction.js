import {ActionBrick, instanceToTag, ListDef, registerBrick, Sync} from 'olympe';

export default class AddElementToListAction extends ActionBrick {

    /**
     * Executed every time the brick receives a new trigger event.
     * Note that the method will be executed _even if_ an input (list, object) is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {!ListDef|!Array} list
     * @param {!Sync|!Object} object
     * @param {function()} forwardEvent
     * @param {function(!ListDef|!Array)} setList
     */
    onUpdate(context, [list, object], [forwardEvent, setList]) {
        // Guards
        if(!Array.isArray(list) && !(list instanceof ListDef)) {
            console.error('[AddElementToList] TypeError: the list should be of type ListDef or Array');
            return;
        }
        if(list instanceof ListDef && !(object instanceof Sync)) {
            console.error('[AddElementToList] TypeError: only a Sync can be added to a ListDef');
            return;
        }

        // Addition
        let newList = list;
        if(Array.isArray(list)) {
            list.push(object);
        } else {
            newList = list.union(new ListDef(instanceToTag(object), []));
        }

        // Done
        setList(newList);
        forwardEvent();
    }
}

registerBrick('0179c7fea60380c20ff4', AddElementToListAction);
