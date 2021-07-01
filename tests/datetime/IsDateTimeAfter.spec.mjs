/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
