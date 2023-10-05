import ObjectToMap from "../../src/core/data/map/ObjectToMap.js";
import {BrickContext} from "olympe";

describe('Object to Map brick', () => {
    it('should trigger an error if the input is not a Cloud object', () => {
        const test = new ObjectToMap();
        const input2 = '{"name":"Bob", "info":("living_in":"city", "owns":"dog")}';
        const forwardEvent = jasmine.createSpy("1");
        const setResult = jasmine.createSpy("2");
        const setError = jasmine.createSpy("3");

        test.update(new BrickContext().createChild(), [input2], [forwardEvent, setResult, setError]);
        expect(setResult).toHaveBeenCalledTimes(0);
        expect(setError).toHaveBeenCalledTimes(1);
        expect(forwardEvent).toHaveBeenCalledTimes(0);
    });

    it('should trigger an error if input is null', () => {
        const test = new ObjectToMap();
        const forwardEvent = jasmine.createSpy();
        const setResult = jasmine.createSpy();
        const setError = jasmine.createSpy();

        test.update(new BrickContext().createChild(), [null], [forwardEvent, setResult, setError]);
        expect(setResult).toHaveBeenCalledTimes(0);
        expect(setError).toHaveBeenCalledTimes(1);
        expect(forwardEvent).toHaveBeenCalledTimes(0);
    });

})