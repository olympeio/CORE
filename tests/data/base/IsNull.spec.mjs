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

import IsNull from '../../../src/core/data/base/IsNull.js';
import testEqual from '../../helpers/testEqual.mjs';

xdescribe('IsNull brick', () => {
    it('should return true when null or undefined is given', () => {
        const a = new IsNull();
        testEqual(a, [undefined], [true]);
        testEqual(a, [null], [true]);
    });
    it('should return false when an object or a value is given', () => {
        const a = new IsNull();
        testEqual(a, [''], [false]);
        testEqual(a, ['someObject'], [false]);
        testEqual(a, [0], [false]);
        testEqual(a, [false], [false]);
        testEqual(a, [[]], [false]);
        testEqual(a, [{'propA': 1}], [false])
        testEqual(a, [{}], [false])
    });
});
