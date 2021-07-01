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

import Minus from '../../src/core/math/Minus.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Minus brick', () => {
    it('should subtract correctly', () => {
        const m = new Minus();
        testEqual(m, [3, 1], [2]);
        testEqual(m, [1, -2], [3]);
        testEqual(m, [1, NaN], [NaN]);
    })
});
