import {FunctionBrick, registerBrick, ListDef, predicates, Direction, instanceToTag, DBView} from 'olympe';

/**
 * @param {Array} list
 * @param {boolean} inverseFilter
 * @return {?Array}
 */
const filterList = (list, inverseFilter) => {
    const db = DBView.get();
    let invalidObject = false;
    list.filter((object) => {
        if (instanceToTag(object) === '') {
            console.error('[Filter Has Related] One object in the list has no valid tag');
            invalidObject = true;
            return false;
        } else {
            const isRelated = db.isRelated(object, relation, relatedObject);
            return inverseFilter ? !isRelated : isRelated;
        }
    })
    return invalidObject ? null : list;
};

export default class FilterHasRelated extends FunctionBrick {

    /**
     * Executed every time an input (list, relatedObject, relation, inverseFilter) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {!ListDef|!Array} list
     * @param {!InstanceTag} relatedObject
     * @param {!Relation} relation
     * @param {boolean} inverseFilter
     * @param {function(ListDef|Array)} setFilteredList
     */
    onUpdate(context, [list, relatedObject, relation, inverseFilter], [setFilteredList]) {
        if (instanceToTag(relatedObject) === '') {
            console.error('Filter Has Related: `related object` has no valid tag');
        } else if(Array.isArray(list)) {
            const filteredList = filterList(list);
            if (filteredList !== null) {
                setFilteredList(filteredList);
            }
        } else if (list instanceof ListDef) {
            const relatedFilter = new predicates.HasRelated([relation], [Direction.DESTINATION], relatedObject);
            setFilteredList(list.filter(inverseFilter ? new predicates.Not(relatedFilter) : relatedFilter));
        } else {
            console.error('TypeError: The list should be of type ListDef or Array');
        }
    }
}

registerBrick('016c703cb5ba00f37159', FilterHasRelated);
