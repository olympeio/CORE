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

import {CloudObject, Relation, Predicate} from 'olympe';

/**
 * @param {CloudObject} brick
 * @param {string} input
 * @return {Array<?string>} [scope, property] or [null, null]
 */
export default function getScopeContext(brick, input) {
    const srcScopeRel = new Relation('0168a431d91f25780002');
    const srcPropertyRel = new Relation('0168a431d91f25780004');
    const destScopeRel = new Relation('0168a431d91f2578000a');
    const destInputRel = new Relation('0168a431d91f2578000b');

    const propertyPipe = brick.follow(destScopeRel.getInverse()).andReturn()
        .follow(destInputRel).filter(Predicate.in(input))
        .executeFromCache().getFirst();

    if (propertyPipe) {
        const scope = propertyPipe.followSingle(srcScopeRel).executeFromCache();
        const property = propertyPipe.followSingle(srcPropertyRel).executeFromCache();
        return [scope?.getTag(), property?.getTag()];
    }

    return [null, null];
}
