import testEqual from '../helpers/testEqual.mjs';
import {BrickContext} from 'olympe';
import AddElementToMap from "../../src/core/data/map/AddElementToMap.js";

describe('AddElementToMap brick', () => {
    it('should add an element to the map', () => {
        const func = new AddElementToMap();
        testEqual(func,
            [new Map([['one', 1]]), 'two', 2],
            [new Map([['one', 1], ['two', 2]])],
            0
        );
    });

    it('should replace an already existing element', () => {
        const func = new AddElementToMap();
        testEqual(func,
            [new Map([['one', 1]]), 'one', true],
            [new Map([['one', true]])],
            0
        );
    });

    it('should accept null or undefined values', () => {
        const func = new AddElementToMap();
        testEqual(func, [new Map(), 'key', null], [new Map([['key', null]])], 0);
        testEqual(func, [new Map(), 'key', undefined], [new Map([['key', undefined]])], 0);
    });

    it('should create a map if none is provided', () => {
        const func = new AddElementToMap();
        testEqual(func, [undefined, 'key', 'value'], [new Map([['key', 'value']])], 0);

        const func2 = new AddElementToMap();
        testEqual(func2, [null, 'key', 'value'], [new Map([['key', 'value']])], 0);
    });

    it('should check that a string key and a map are provided, not executing otherwise', () => {
        const func = new AddElementToMap();
        const forwardEvent = jasmine.createSpy();
        const outputMap = jasmine.createSpy();

        func.update(new BrickContext().createChild(), [[], 'key', 'value'], [forwardEvent, outputMap]);
        expect(forwardEvent).toHaveBeenCalledTimes(0);
        expect(outputMap).toHaveBeenCalledTimes(0);

        func.update(new BrickContext().createChild(), [undefined, 3, 'value'], [forwardEvent, outputMap]);
        expect(forwardEvent).toHaveBeenCalledTimes(0);
        expect(outputMap).toHaveBeenCalledTimes(0);

        func.update(new BrickContext().createChild(), [undefined, null, 'value'], [forwardEvent, outputMap]);
        expect(forwardEvent).toHaveBeenCalledTimes(0);
        expect(outputMap).toHaveBeenCalledTimes(0);
    });
});
