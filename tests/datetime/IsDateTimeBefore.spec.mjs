import IsDateTimeBefore from '../../src/core/datetime/IsDateTimeBefore.js';
import testEqual from '../helpers/testEqual.mjs';

describe('IsDateTimeBefore brick', () => {
    it('should return false when the first date is after the second one', () => {

        const dateA = new Date(2014, 6, 10, 13, 45, 30, 0);
        const dateB = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new IsDateTimeBefore(), [dateA, dateB, true], [false]);
        testEqual(new IsDateTimeBefore(), [dateA, dateB, false], [false]);
    });
    it('should return true when the first date is before the second one', () => {

        const dateA = new Date(2014, 6, 10, 11, 45, 30, 0);
        const dateB = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new IsDateTimeBefore(), [dateA, dateB, true], [true]);
        testEqual(new IsDateTimeBefore(), [dateA, dateB, false], [true]);
    });
    it('should return false when both date are the same, and strictly is true', () => {

        const date = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new IsDateTimeBefore(), [date, date, true], [false]);
    });
    it('should return true when both date are the same, and strictly is false', () => {

        const date = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new IsDateTimeBefore(), [date, date, false], [true]);
    });
});
