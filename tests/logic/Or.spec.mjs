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

import Or from '../../src/core/logic/Or.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Or brick', () => {
    it('should transform correctly', () => {
        const o = new Or();
        testEqual(o, [true, true], [true]);
        testEqual(o, [true, false], [true]);
        testEqual(o, [false, true], [true]);
        testEqual(o, [false, false], [false]);
    })
});
