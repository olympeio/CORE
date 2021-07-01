/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {FunctionBrick, registerBrick, ListDef, predicates, Direction, instanceToTag, DBView} from 'olympe';
import {getLogger} from 'logging';

/**
 * @param {Array} list
 * @param {boolean=} inverseFilter
 * @return {?Array}
 */
const filterList = (list, inverseFilter) => {
    const db = DBView.get();
    let invalidObject = false;
    list.filter((object) => {
        if (instanceToTag(object) === '') {
            getLogger('Filter Has Related').error('One object in the list has no valid tag');
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
        const logger = getLogger('Filter Has Related');

        if (instanceToTag(relatedObject) === '') {
            logger.error('`related object` has no valid tag');
        } else if(Array.isArray(list)) {
            const filteredList = filterList(list);
            if (filteredList !== null) {
                setFilteredList(filteredList);
            }
        } else if (list instanceof ListDef) {
            const relatedFilter = new predicates.HasRelated([relation], [Direction.DESTINATION], relatedObject);
            setFilteredList(list.filter(inverseFilter ? new predicates.Not(relatedFilter) : relatedFilter));
        } else {
            logger.error('TypeError: The list should be of type ListDef or Array');
        }
    }
}

registerBrick('016c703cb5ba00f37159', FilterHasRelated);
