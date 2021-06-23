import DateTimeAdd from '../../src/core/datetime/DateTimeAdd.js';
import testEqual from '../helpers/testEqual.mjs';
import { add } from 'date-fns'

describe('DateTimeAdd brick', () => {
    it('should add the given duration to the date', () => {

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

        testEqual(new DateTimeAdd(), [
            date,
            duration['years'],
            duration['months'],
            duration['days'],
            duration['weeks'],
            duration['hours'],
            duration['minutes'],
            duration['seconds']
        ], [add(date, duration)]);
    });
});
