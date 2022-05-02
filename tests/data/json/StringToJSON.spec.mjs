import StringToJSON from '../../../src/core/data/json/StringToJSON.js';
import { BrickContext } from 'olympe';

describe('StringToJSON brick', () => {
    it('should properly parse a string to json', () => {
        const brick = new StringToJSON();
        const setResult = jasmine.createSpy();
        const setError = jasmine.createSpy();

        brick.update(new BrickContext(), ['{"a":"test","b":{}}', 'b'], [setResult, setError]);
        expect(setResult).toHaveBeenCalledOnceWith({"a":"test","b":{}});
        expect(setError).toHaveBeenCalledTimes(0);
    });

    it('should properly display an error when source is not a string', () => {
        const brick = new StringToJSON();

        const setResult = jasmine.createSpy().and.callFake(() => {});
        const setError = jasmine.createSpy().and.callFake(() => {});

        const run = () => brick.update(new BrickContext(), [42], [setResult, setError]);
        expect(setResult).not.toHaveBeenCalled();
    });

    it('should properly handle an invalid json string as input', () => {
        const brick = new StringToJSON();

        const setResult = jasmine.createSpy().and.callFake(() => {});
        const setError = jasmine.createSpy().and.callFake(() => {});
        const run = () => brick.update( new BrickContext(), ['{"a":"test"'], [setResult, setError]);

        expect(run).not.toThrowError();
        expect(setResult).toHaveBeenCalledWith(null);
        expect(setError).toHaveBeenCalled();
    });
});
