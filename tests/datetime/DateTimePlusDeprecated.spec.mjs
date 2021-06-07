import DateTimePlusDeprecated from '../../src/core/datetime/DateTimePlusDeprecated.js';
import testEqual from '../helpers/testEqual.mjs';
import { addMilliseconds } from 'date-fns'

describe('DateTimePlusDeprecated brick', () => {
    it('should add the given amount of milliseconds', () => {

        const date = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new DateTimePlusDeprecated(), [date, 750], [addMilliseconds(date, 750)]);
    });
});
