import JSONToMap from "../../src/core/data/map/JSONToMap.js";
import {BrickContext} from "olympe";
import testEqual from '../helpers/testEqual.mjs';

describe('JSONtoMap brick', () => {

    it('should parse a JSON string correctly', () => {
        const test = new JSONToMap();

        const setMap = jasmine.createSpy().and.callFake((map) => {
            expect(map.has('name')).toBeTrue();
            expect(map.get('name')).toBe('Bob');
        });
        const setErrorFlow = jasmine.createSpy();
        const forwardEvent = jasmine.createSpy();
        test.update(new BrickContext().createChild(), ['{"name":"Bob"}'], [forwardEvent, setMap, setErrorFlow]);
        expect(setMap).toHaveBeenCalledTimes(1);
        expect(forwardEvent).toHaveBeenCalledTimes(1);
        expect(setErrorFlow).toHaveBeenCalledTimes(0);
    });

    it('should handle a JSON object correctly', () => {
        const test = new JSONToMap();

        const setMap = jasmine.createSpy().and.callFake((map) => {
            expect(map.has('name')).toBeTrue();
            expect(map.get('name')).toBe('Bob');
        });
        const setErrorFlow = jasmine.createSpy();
        const forwardEvent = jasmine.createSpy();
        test.update(new BrickContext().createChild(), [{"name":"Bob"}], [forwardEvent, setMap, setErrorFlow]);
        expect(setMap).toHaveBeenCalledTimes(1);
        expect(forwardEvent).toHaveBeenCalledTimes(1);
        expect(setErrorFlow).toHaveBeenCalledTimes(0);
    });

    it('should handle complex JSON objects', () => {
        const test = new JSONToMap();

        const setMap = jasmine.createSpy().and.callFake((map) => {
            expect(map.has('name')).toBeTrue();
            expect(map.get('name')).toBe('Bob');
            const a = map.get('a');
            expect(Array.isArray(a)).toBeTrue();
            expect(a[1]).toBe(1);
            const b = map.get('b');
            expect(b instanceof Map).toBeTrue();
            expect(b.get('c')).toBe(100);
            expect(Array.isArray(b.get('d'))).toBeTrue();
        });
        const setErrorFlow = jasmine.createSpy();
        const forwardEvent = jasmine.createSpy();
        test.update(new BrickContext().createChild(), [{"name":"Bob", "a": [0, 1, 2], "b": {"c": 100, "d": [10, 20]}}], [forwardEvent, setMap, setErrorFlow]);
        expect(setMap).toHaveBeenCalledTimes(1);
        expect(forwardEvent).toHaveBeenCalledTimes(1);
        expect(setErrorFlow).toHaveBeenCalledTimes(0);

    });

    it('should properly display error if input undefined', () => {
        const test = new JSONToMap();
        let input;
        const setMap = jasmine.createSpy();
        const setErrorFlow = jasmine.createSpy();
        const forwardEvent = jasmine.createSpy();
        test.update(new BrickContext().createChild(), [input], [forwardEvent, setMap, setErrorFlow]);
        //then
        expect(setMap).toHaveBeenCalledTimes(0);
        expect(forwardEvent).toHaveBeenCalledTimes(0);
        expect(setErrorFlow).toHaveBeenCalledTimes(1);
    });

    it('should be undefined if input is not a valid object', () =>{
        const input1 = '{"string":"foo"}';
        const input2 = '{"name":"Bob", "infos": {"living_in":"Geneva", "owns"}}'
        const forwardEvent=  jasmine.createSpy();
        const setMap =  jasmine.createSpy();
        const setError =  jasmine.createSpy();
        const test = new JSONToMap();

        test.update(new BrickContext().createChild(), [input2], [forwardEvent, setMap, setError]);
        expect(setMap).toHaveBeenCalledTimes(0);
        expect(setError).toHaveBeenCalledTimes(1);
        expect(forwardEvent).toHaveBeenCalledTimes(0);
    });

    it('should trigger error flow given an incorrect input ', () =>{
        //test with expect(foo).toEqual(jasmine.objectContaining({"name":"Bob"})}
        const test = new JSONToMap();
        const forwardEvent = jasmine.createSpy();
        const setMap = jasmine.createSpy();
        const setError = jasmine.createSpy();

        test.update(new BrickContext().createChild(), ['{[1, 3, 4, 7]}'], [forwardEvent, setMap, setError]);
        expect(setError).toHaveBeenCalledTimes(1);
        expect(setMap).toHaveBeenCalledTimes(0);
        expect(forwardEvent).toHaveBeenCalledTimes(0);
    });

    it('should return error if input not json string', () => {
        //when
        const test = new JSONToMap();
        const input = 'firstname';
        const forwardEvent = jasmine.createSpy();
        const setMap = jasmine.createSpy();
        const setError = jasmine.createSpy();
        //then
        test.update(new BrickContext().createChild(), [input], [forwardEvent, setMap, setError]);
        expect(setError).toHaveBeenCalledTimes(1);
        expect(setMap).toHaveBeenCalledTimes(0);
        expect(forwardEvent).toHaveBeenCalledTimes(0);
    });

    it('should emit an error when provided json is invalid', () => {
        const test = new JSONToMap();
        const input1 = '{"name":"Bob","new":{,"city":["some"]}';
        const setMap = jasmine.createSpy();
        const setErrorFlow = jasmine. createSpy();
        const forwardEvent = jasmine.createSpy();

        test.update(new BrickContext().createChild(), [input1], [forwardEvent, setMap, setErrorFlow]);

        expect(setErrorFlow).toHaveBeenCalledTimes(1);
        expect(setMap).toHaveBeenCalledTimes(0);
        expect(forwardEvent).toHaveBeenCalledTimes(0);
    });

    it('should properly display an error if provided input is not string or obj', () => {
        // in case of invalid input
        const test = new JSONToMap();
        const setMap = jasmine.createSpy();
        const setError = jasmine.createSpy();
        const forwardEvent = jasmine.createSpy();

        test.update(new BrickContext().createChild(), [5890], [forwardEvent, setMap, setError]);

        expect(setMap).toHaveBeenCalledTimes(0);
        expect(setError).toHaveBeenCalledTimes(1);
        expect(forwardEvent).toHaveBeenCalledTimes(0);
    });

})