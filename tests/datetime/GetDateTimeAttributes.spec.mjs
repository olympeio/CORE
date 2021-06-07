import GetDateTimeAttributes from '../../src/core/datetime/GetDateTimeAttributes.js';
import testEqual from '../helpers/testEqual.mjs';

describe('GetDateTimeAttributes brick', () => {
    it('should return the date attributes', () => {

        const date = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new GetDateTimeAttributes(), [date], [2014, 7, 10, 12, 45, 30]);
    });
});
