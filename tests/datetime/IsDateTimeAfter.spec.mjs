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

import IsDateTimeAfter from '../../src/core/datetime/IsDateTimeAfter.js';
import testEqual from '../helpers/testEqual.mjs';

describe('IsDateTimeAfter brick', () => {
    it('should return true when the first date is after the second one', () => {

        const dateA = new Date(2014, 6, 10, 13, 45, 30, 0);
        const dateB = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new IsDateTimeAfter(), [dateA, dateB, true], [true]);
        testEqual(new IsDateTimeAfter(), [dateA, dateB, false], [true]);
    });
    it('should return false when the first date is before the second one', () => {

        const dateA = new Date(2014, 6, 10, 11, 45, 30, 0);
        const dateB = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new IsDateTimeAfter(), [dateA, dateB, true], [false]);
        testEqual(new IsDateTimeAfter(), [dateA, dateB, false], [false]);
    });
    it('should return false when both date are the same, and strictly is true', () => {

        const date = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new IsDateTimeAfter(), [date, date, true], [false]);
    });
    it('should return true when both date are the same, and strictly is false', () => {

        const date = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new IsDateTimeAfter(), [date, date, false], [true]);
    });
});
