import {FunctionBrick, registerBrick, ListDef, Sync, instanceToTag} from 'olympe';

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
            newList = list.concat([object]);
        } else {
            newList = list.union(new ListDef(instanceToTag(object), []));
        }

        // Done
        setList(newList);
    }
}

registerBrick('0179c7aee952dc922de1', AddElementToListFunction);
