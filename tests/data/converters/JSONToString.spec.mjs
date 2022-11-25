import JSONToString from '../../../src/core/data/converters/JSONToString.js';
import { BrickContext } from 'olympe';

describe('JSONToString brick', () => {
    it('should pretty print a JSON string input', () => {
        const func = new JSONToString();

        const compactJSON = '{"a":"test","b":{},"c":["some"]}';
        const prettyJSON = '{\n' +
            '    "a": "test",\n' +
            '    "b": {},\n' +
            '    "c": [\n' +
            '        "some"\n' +
            '    ]\n' +
            '}';

        const setResult = jasmine.createSpy();
        const setError = jasmine.createSpy();
        func.update(new BrickContext(), [compactJSON, 4], [setResult, setError]);

        expect(setError).toHaveBeenCalledTimes(0);
        expect(setResult).toHaveBeenCalledOnceWith(prettyJSON);
    });

    it('should emit an error when provided JSON is invalid', () => {
        const func = new JSONToString();

        const compactJSON = '{"a":"test","b":{,"c":["some"]}';

        const setResult = jasmine.createSpy();
        const setError = jasmine.createSpy();
        func.update(new BrickContext(), [compactJSON, 4], [setResult, setError]);

        expect(setError).toHaveBeenCalledTimes(1);
        expect(setResult).toHaveBeenCalledTimes(0);
    });

    it('should not return anything if provided input is not string or json', () => {
        const func = new JSONToString();

        const setResult = jasmine.createSpy();
        const setError = jasmine.createSpy();
        func.update(new BrickContext(), [9, 0], [setResult, setError]);

        expect(setError).toHaveBeenCalledTimes(0);
        expect(setResult).toHaveBeenCalledTimes(0);
    });
});
