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

        func.update(context, [dateStr, ''], [setDateSpy]);

        // the month is 0-indexed
        expect(setDateSpy).toHaveBeenCalledOnceWith(new Date(2011, 9, 5, 14, 48, 0, 0));
    });
});
