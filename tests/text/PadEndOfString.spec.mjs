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

import PadEndOfString from '../../src/core/text/PadEndOfString.js';
import testEqual from '../helpers/testEqual.mjs';

describe('PadEndOfString brick', () => {
    it('should return the same string if length is smaller than the string', () => {
        const func = new PadEndOfString();
        testEqual(func, ['toto', 0], ['toto']);
        testEqual(func, ['totototo', 4], ['totototo']);
    });
    it('should pad the string with space characters if the length is longer than the string', () => {
        const func = new PadEndOfString();
        testEqual(func, ['toto', 10], ['toto      ']);
        testEqual(func, ['totototo', 10], ['totototo  ']);
    });
});
