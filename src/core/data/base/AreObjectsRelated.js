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

import {FunctionBrick, registerBrick, ListDef, transformers, predicates, Direction} from 'olympe';

export default class AreObjectsRelated extends FunctionBrick {

    /**
     * Executed every time an input (object1, object2, relation) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {*} origin
     * @param {*} destination
     * @param {RelationPrimitive} relation Assumed to be always in direction origin->destination
     * @param {function(boolean)} setRelated
     */
    onUpdate(context, [origin, destination, relation], [setRelated]) {
        new ListDef(origin, [
            new transformers.Filter(
                new predicates.HasRelated(
                    [relation],
                    [Direction.DESTINATION],
                    destination
                )
            )
        ]).observeSize().subscribe((size) => setRelated(size > 0));

    }
}

registerBrick('0179ea6dd0a21b45bf71', AreObjectsRelated);
