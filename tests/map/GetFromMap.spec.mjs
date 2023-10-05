import testEqual from '../helpers/testEqual.mjs';
import GetFromMap from '../../src/core/data/map/GetFromMap.js';

describe('GetFromMap brick', () => {
    it('should get an element from the map', () => {
        const func = new GetFromMap();
        testEqual(func,
            [new Map([['one', 1], ['two', 2]]), 'two'],
            [new Map([['one', 1], ['two', 2]]), 2],
            0
        );
    });

    it('should return null if no element is present in the map', () => {
        const func = new GetFromMap();
        testEqual(func,
            [new Map([['one', 1], ['two', 2]]), 'three'],
            [new Map([['one', 1], ['two', 2]]), null],
            0
        );
    });
});
