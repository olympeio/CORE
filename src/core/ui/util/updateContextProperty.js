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

import {Direction, transformers, DBView} from 'olympe';

/**
 * @param {FunctionBrick} brick
 * @param {string} input
 * @return {Array<?string>} [scope, property] or [null, null]
 */
export default function getScopeContext(brick, input) {
    const srcScope = '0168a431d91f25780002'
    const srcProperty = '0168a431d91f25780004'
    const destScope = '0168a431d91f2578000a'
    const destInput = '0168a431d91f2578000b'

    const dbView = DBView.get();

    const srcScopeRel = new transformers.Related(srcScope, Direction.DESTINATION);
    const srcPropertyRel = new transformers.Related(srcProperty, Direction.DESTINATION);
    const destScopeRel = new transformers.Related(destScope, Direction.DESTINATION);
    const destInputRel = new transformers.Related(destInput, Direction.DESTINATION);
    const propertyPipe = dbView.findRelated(
        brick,
        [destScopeRel.getInverse()],
        (pipe) => dbView.getUniqueRelated(pipe, destInputRel) === input
    );

    if (propertyPipe) {
        const scope = dbView.getUniqueRelated(propertyPipe, srcScopeRel);
        const property = dbView.getUniqueRelated(propertyPipe, srcPropertyRel);

        return [scope, property];
    }

    return [null, null];
}
