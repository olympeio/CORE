import { ActionBrick, registerBrick, QueryResult } from 'olympe';
import {getLogger} from "logging";

export default class RemoveFromListAt extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Array|QueryResult} list
     * @param {number} position
     * @param {function()} forwardEvent
     * @param {function(Array)} setList
     * @param {function(Object)} setRemovedItem
     */
    update(context, [list, position], [forwardEvent, setList, setRemovedItem]) {
        const logger = getLogger('Remove From List At');
        // Guards
        if (!Array.isArray(list) && !(list instanceof QueryResult)) {
            logger.error('TypeError: the list should be of type an Array or a QueryResult');
            return;
        }

        const primaryArray = Array.isArray(list) ? list : list.toArray();
        if (position >= 0 && position < primaryArray.length) {
            const newList = Array.from(primaryArray);
            const [removedItem] = newList.splice(position, 1);
            setRemovedItem(removedItem);
            setList(newList);
        } else {
            logger.warn(`Position ${position} is out of the bounds of the given array.`);
            setRemovedItem(null);
            setList(list);
        }
        forwardEvent();
    }
}

registerBrick('017aaa391a4312b07133', RemoveFromListAt);
