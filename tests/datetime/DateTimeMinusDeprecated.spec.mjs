import DateTimeMinusDeprecated from '../../src/core/datetime/DateTimeMinusDeprecated.js';
import testEqual from '../helpers/testEqual.mjs';
import { subMilliseconds } from 'date-fns'

describe('DateTimeMinusDeprecated brick', () => {
    it('should subtract the given amount of milliseconds', () => {

        const date = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new DateTimeMinusDeprecated(), [date, 750], [subMilliseconds(date, 750)]);
    });
});
