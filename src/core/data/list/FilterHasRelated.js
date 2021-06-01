import {FunctionBrick, registerBrick, Context, ListDef, predicates, Direction, instanceToTag, DBView} from 'olympe';

export default class FilterHasRelated extends FunctionBrick {

    /**
     * Executed every time an input (list, relatedObject, relation, inverseFilter) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {!ListDef|!Array} list
     * @param {!Sync} relatedObject
     * @param {!Relation} relation
     * @param {boolean} inverseFilter
     * @param {function(ListDef|Array)} setFilteredList
     */
    onUpdate(context, [list, relatedObject, relation, inverseFilter], [setFilteredList]) {

        const relatedObjectTag = instanceToTag(relatedObject);

        if (relatedObjectTag === '') {
            console.error('[FilterHasRelated] relatedObject is not a valid Sync!');
        } else if(Array.isArray(list)) {
            let invalidObject = false;
            const dbView = DBView.get();
            const newList = list.filter(
                object => {
                    const objectTag = instanceToTag(object);
                    if (objectTag === '') {
                        console.error('[FilterHasRelated] One object in the list is not a valid Sync!');
                        invalidObject = true;
                        return false;
                    } else {
                        let isRelated = dbView.isRelated(objectTag, relation, relatedObjectTag);
                        if (inverseFilter) {
                            return !isRelated;
                        } else {
                            return isRelated;
                        }
                    }
                }
            );

            if (!invalidObject) {
                setObject(newList);
            }
        } if (list instanceof ListDef) {

            const relatedFilter = new predicates.HasRelated(
                [relation],
                [Direction.DESTINATION],
                relatedObject
            );

            setFilteredList(list.filter(
                inverseFilter
                    ? new predicates.Not(relatedFilter)
                    : relatedFilter
            ));
        } else {
            console.error('TypeError: The list should be of type ListDef or Array');
        }
    }
}

registerBrick('016c703cb5ba00f37159', FilterHasRelated);
