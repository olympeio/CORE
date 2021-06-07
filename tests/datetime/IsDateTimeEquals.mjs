import IsDateTimeEqual from '../../src/core/datetime/IsDateTimeEqual.js';
import testEqual from '../helpers/testEqual.mjs';

describe('IsDateTimeEqual brick', () => {
    it('should return false when dates are different', () => {

        const dateA = new Date(2014, 6, 10, 12, 45, 30, 0);
        const dateB = new Date(2014, 6, 10, 11, 45, 30, 0);

        testEqual(new IsDateTimeEqual(), [dateA, dateB], [false]);
    });
    it('should return true when both date are the same', () => {

        const date = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new IsDateTimeEqual(), [date, date], [true]);
    });
});
