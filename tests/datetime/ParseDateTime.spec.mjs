import ParseDateTime from '../../src/core/datetime/ParseDateTime.js';
import testEqual from '../helpers/testEqual.mjs';
import { parse, parseISO } from 'date-fns';

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

        const dateStr = '2016-01-01';
        testEqual(new ParseDateTime(), [dateStr], [parseISO(dateStr)]);
        testEqual(new ParseDateTime(), [dateStr, ''], [parseISO(dateStr)]);
    });
});
