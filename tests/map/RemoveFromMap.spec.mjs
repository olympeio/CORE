import testEqual from '../helpers/testEqual.mjs';
import RemoveFromMap from '../../src/core/data/map/RemoveFromMap.js';

describe('GetFromMap brick', () => {
    it('should remove an element from the map', () => {
        const func = new RemoveFromMap();
        testEqual(func,
            [new Map([['one', 1], ['two', 2]]), 'two'],
            [new Map([['one', 1]]), 2],
            0
        );
    });

    it('should return null if no matching element is found in the map', () => {
        const func = new RemoveFromMap();
        testEqual(func,
            [new Map([['one', 1], ['two', 2]]), 'three'],
            [new Map([['one', 1], ['two', 2]]), null],
            0
        );
    });

});
