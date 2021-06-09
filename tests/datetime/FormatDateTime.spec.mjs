import FormatDateTime from '../../src/core/datetime/FormatDateTime.js';
import testEqual from '../helpers/testEqual.mjs';
import {format} from 'date-fns';


describe('FormatDateTime brick', () => {
    it('should properly format dates', () => {
        const func = new FormatDateTime();

        const checkFormat = (date, formatString) => {
            const expected = format(date, formatString);
            testEqual(func, [date, formatString], [expected]);
        };

        checkFormat(new Date(2014, 1, 11), 'MM/dd/yyyy');
        checkFormat(new Date(2014, 6, 2, 15), "h 'o''clock'");
    });
});
