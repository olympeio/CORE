/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Direction, transformers, DBView} from 'olympe';

/**
 * @param {Brick} brick
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
