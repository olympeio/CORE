import { Brick, registerBrick, instanceToTag, ErrorFlow, ListDef, CloudObject, QueryResult } from 'olympe';
import { getLogger } from 'logging';

export default class AddToListFunction extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {ListDef} source
     * @param {*} newObject
     * @param {function(ListDef|Array)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source, newObject], [setResult, setErrorFlow]) {
        addElementToList(source || [], newObject, (newList, errorMessage) => {
            if (newList !== null) {
                setResult(newList);
            } else {
                setErrorFlow(ErrorFlow.create(errorMessage, 1));
            }
        });
    }
}

/**
 *
 * @param {!ListDef|!List} list
 * @param {!CloudObject|!Object} object
 * @param {function((ListDef | Array), string=)} onDone
 */
export const addElementToList = (list, object, onDone) => {
    const logger = getLogger('Add To List');

    // Guards
    if (!Array.isArray(list) && !(list instanceof ListDef) && !(list instanceof QueryResult)) {
        const errorMessage = 'TypeError: the list should be of type ListDef, Array or QueryResult';
        logger.error(errorMessage);
        onDone(null, errorMessage);
        return;
    }
    if (list instanceof ListDef && !(object instanceof CloudObject)) {
        const errorMessage = 'TypeError: only a CloudObject can be added to a ListDef';
        logger.error(errorMessage);
        onDone(null, errorMessage);
        return;
    }

    if (Array.isArray(list)) {
        list.push(object);
        onDone(list);
    } else if(list instanceof QueryResult) {
        onDone(list.push(object));
    } else {
        onDone(list.union(new ListDef(instanceToTag(object), []))); // New listdef: union of the previous + 1 instance.
    }
};

registerBrick('017fbda3e482d527fe45', AddToListFunction);
