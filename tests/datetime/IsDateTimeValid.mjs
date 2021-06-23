import IsDateTimeValid from '../../src/core/datetime/IsDateTimeValid.js';
import testEqual from '../helpers/testEqual.mjs';

describe('IsDateTimeValid brick', () => {
    it('should return true when the date is valid', () => {

        const date = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new IsDateTimeValid(), [date], [true]);
    });
    it('should return false when the date is not valid', () => {

        const date = new Date('foo');

        testEqual(new IsDateTimeValid(), [date], [false]);
    });
});
