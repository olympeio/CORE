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

import IsDateTimeEqual from '../../src/core/datetime/IsDateTimeEqual.js';
import testEqual from '../helpers/testEqual.mjs';

describe('IsDateTimeEqual brick', () => {
    it('should return false when dates are different', () => {

        const dateA = new Date(2014, 6, 10, 12, 45, 30, 0);
        const dateB = new Date(2014, 6, 10, 11, 45, 30, 0);

        testEqual(new IsDateTimeEqual(), [dateA, dateB], [false]);
    });
    it('should return true when both date are the same', () => {

        const date = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new IsDateTimeEqual(), [date, date], [true]);
    });
});
