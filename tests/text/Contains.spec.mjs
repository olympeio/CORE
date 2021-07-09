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

import Contains from '../../src/core/text/Contains.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Contains brick', () => {
    it('should test correctly', () => {
        const c = new Contains();
        testEqual(c, ['Hello World', 'World'], [true]);
        testEqual(c, ['Hello World', 'Foo'], [false]);
        testEqual(c, ['', 'Foo'], [false]);
        testEqual(c, ['Foo', ''], [true]);
    });
    it('should convert automatically', () => {
        const c = new Contains();
        testEqual(c, [123, '2'], [true]);
        testEqual(c, ['Hello', 1], [false]);
        testEqual(c, [123, 2], [true]);
        testEqual(c, [true, 'Hello'], [false]);
        testEqual(c, [true, false], [false]);
        testEqual(c, [false, false], [true]);
        testEqual(c, ['It is true', true], [true]);
    });
});
