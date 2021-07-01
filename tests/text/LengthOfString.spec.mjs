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

import LengthOfString from '../../src/core/text/LengthOfString.js';
import testEqual from '../helpers/testEqual.mjs';

describe('LengthOfString brick', () => {
    it('should get Length', () => {
        const l = new LengthOfString();
        testEqual(l, ['Hello'], [5]);
        testEqual(l, [''], [0]);
    });
    it('should convert automatically', () => {
        const l = new LengthOfString();
        testEqual(l, [123], [3]);
        testEqual(l, [true], [4]);
    });
});
