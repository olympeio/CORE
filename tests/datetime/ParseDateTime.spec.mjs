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
