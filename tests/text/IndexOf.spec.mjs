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

import IndexOf from '../../src/core/text/IndexOf.js';
import testEqual from '../helpers/testEqual.mjs';

describe('IndexOf brick', () => {
    it('should return -1 when the substring is not found', () => {
        const func = new IndexOf();
        testEqual(func, ['', 'toto'], [-1]);
        testEqual(func, ['titi', 'toto'], [-1]);
    });
    it('should return 0 when both string are identical', () => {
        const func = new IndexOf();
        testEqual(func, ['toto', 'toto'], [0]);
        testEqual(func, ['', ''], [0]);
    });
    it('should return 0 when the substring is an empty string', () => {
        const func = new IndexOf();
        testEqual(func, ['toto', ''], [0]);
    });
    it('should return the proper index when a valid substring is provided', () => {
        const func = new IndexOf();
        testEqual(func, ['totototo', 'to'], [0]);
        testEqual(func, ['tototata', 'ta'], [4]);
        testEqual(func, ['titatotu', 'ta'], [2]);
    });
});
