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

import Regex from '../../src/core/text/Regex.js';
import testEqual from '../helpers/testEqual.mjs';

describe('Regex brick', () => {
    it('should return false and an empty array if there is no match', () => {
        const func = new Regex();
        testEqual(func, ['totototatata', 'titi'], [false, []]);
        testEqual(func, ['toto', '(ta)+'], [false, []]);
        testEqual(func, ['1234', '[a-z]+'], [false, []]);
        testEqual(func, ['abcd', '[0-9]+'], [false, []]);
    });
    it('should return true and an array with all the matched elements if there is at least one match', () => {
        const func = new Regex();
        testEqual(func, ['totototatata', '(to)+'], [true, ['tototo','to']]);
        testEqual(func, ['totototatata', '(to|ta)+'], [true, ['totototatata', 'ta']]);
        testEqual(func, ['01/04/1987', '\\d\\d/\\d\\d/\\d{4}'], [true, ['01/04/1987']]);
        testEqual(func, ['tototatatototatatoto', 'toto'], [true, ['toto']]);
        testEqual(func, ['tototatatototatatoto', 'tata'], [true, ['tata']]);
        testEqual(func, ['tototatatototatatoto', '(to|ta)+'], [true, ['tototatatototatatoto', 'to']]);
        testEqual(func, ['My name is toto, I\'m 24 years old. How do you do?', 'My name is (.*), I\'m (.*) years old'], [true, ['My name is toto, I\'m 24 years old', 'toto', '24']]);
    });
});
