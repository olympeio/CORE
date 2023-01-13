import JSONToCSV from '../../../src/core/data/converters/JSON_To_CSV.js';
import testEqual from '../../helpers/testEqual.mjs';
import { BrickContext } from 'olympe';

describe('JsonToCsv brick', () => {
    it('should return the desired csv given a json', () => {
        const json = [{ "id":1, "name":"Johnson, Smith, and Jones Co.", "amount":345.33, "Remark":"Pays on time" }];
        const jsonString = '[{ "id":1, "name":"Johnson, Smith, and Jones Co.", "amount":345.33, "Remark":"Pays on time" }]';
        const expectedCSV = 'id,name,amount,Remark\n1,"Johnson, Smith, and Jones Co.",345.33,Pays on time';

        testEqual(new JSONToCSV(), [json], [expectedCSV]);
        testEqual(new JSONToCSV(), [jsonString], [expectedCSV]);
    });

    it('should trigger the error flow given an incorrect json', () => {
        const setResult = jasmine.createSpy().and.callFake(() => {});
        const setError = jasmine.createSpy().and.callFake(() => {});
        const run = () =>  new JSONToCSV().update(new BrickContext(), ['{"a":"test",'], [setResult, setError]);

        expect(run).not.toThrowError();
        expect(setResult).not.toHaveBeenCalled();
        expect(setError).toHaveBeenCalled();
    });

    it('should trigger the error flow given an empty string', () => {
        const setResult = jasmine.createSpy().and.callFake(() => {});
        const setError = jasmine.createSpy().and.callFake(() => {});
        const run = () =>  new JSONToCSV().update(new BrickContext(), [''], [setResult, setError]);

        expect(run).not.toThrowError();
        expect(setResult).not.toHaveBeenCalled();
        expect(setError).toHaveBeenCalled();
    });

    it('should properly display an error when source is not json string or json object', () => {
        const setResult = jasmine.createSpy().and.callFake(() => {});
        const setError = jasmine.createSpy().and.callFake(() => {});
        const run = () =>  new JSONToCSV().update(new BrickContext(), [231], [setResult, setError]);

        expect(setResult).not.toHaveBeenCalled();
        expect(setError).not.toHaveBeenCalled();
    });
});
