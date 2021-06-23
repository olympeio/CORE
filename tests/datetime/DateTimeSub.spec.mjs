import DateTimeSub from '../../src/core/datetime/DateTimeSub.js';
import testEqual from '../helpers/testEqual.mjs';
import {sub} from 'date-fns'

describe('DateTimeSub brick', () => {
    it('should subtract the given duration to the date', () => {
        const date = new Date(2014, 6, 10, 12, 45, 30, 0);

        const duration = {
            'years': 1,
            'months': 2,
            'days': 3,
            'weeks': 4,
            'hours': 5,
            'minutes': 6,
            'seconds': 7
        };

        testEqual(new DateTimeSub(), [
            date,
            duration['years'],
            duration['months'],
            duration['days'],
            duration['weeks'],
            duration['hours'],
            duration['minutes'],
            duration['seconds']
        ], [sub(date, duration)]);
    });
});
