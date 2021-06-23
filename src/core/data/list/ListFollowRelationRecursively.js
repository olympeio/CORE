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

import {FunctionBrick, registerBrick, ListDef, instanceToTag, transformers, Direction} from 'olympe';
import {getLogger} from 'logging';

/**
 NO DOC
 **/
export default class ListFollowRelationRecursively extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef} list
     * @param {!RelationPrimitive} relation
     * @param {boolean} toOrigin
     * @param {boolean} includeSelf
     * @param {function(!ListDef)} setFlattenedList
     */
    onUpdate(context, [list, relation, toOrigin, includeSelf], [setFlattenedList]) {
        const logger = getLogger('List Follow Relation Recursively');

        // Guards
        if (!(list instanceof ListDef)) {
            logger.error('TypeError: the list should be of type ListDef.');
            return;
        }
        if (!instanceToTag(relation)) {
            logger.error('relation is not specified');
            return;
        }

        // Transformer
        setFlattenedList(list.transform(
            new transformers.RecursiveRelated(relation, toOrigin ? Direction.ORIGIN : Direction.DESTINATION, includeSelf ? 0 : 1, -1)
        ));
    }
}

registerBrick('017a37f44a27161712a6', ListFollowRelationRecursively);
