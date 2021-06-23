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

import ParseDateTime from '../../src/core/datetime/ParseDateTime.js';
import testEqual from '../helpers/testEqual.mjs';
import { parse, parseISO } from 'date-fns';
import {Context} from 'olympe';

describe('ParseDateTime brick', () => {
    it('should properly parse dates', () => {
        const func = new ParseDateTime();

        const checkParse = (string, format) => {
            const expected = parse(string, format, new Date());
            testEqual(func, [string, format], [expected]);
        };

        checkParse('2010-10-20', 'yyyy-MM-dd');
        checkParse('2010-10-20 4:30', 'yyyy-MM-dd HH:mm');
        checkParse('2010-10-20 4:30 +0000', 'yyyy-MM-dd HH:mm xxxx');
    });

    it('should properly parse dates using the ISO 8601 format if no format is provided', () => {
        const func = new ParseDateTime();
        const context = new Context();
        const dateStr = '2011-10-05T14:48:00.000Z';

        const setDateSpy = jasmine.createSpy();

        func.onUpdate(context, [dateStr, ''], [setDateSpy]);

        // the month is 0-indexed
        expect(setDateSpy).toHaveBeenCalledOnceWith(new Date(2011, 9, 5, 14, 48, 0, 0));
    });
});
