import { BrickContext } from 'olympe';
import CSVToJSON from '../../../src/core/data/json/CSVToJSON.js';

describe('CSVToJSON brick', () => {
    it('should properly parse csv to json', () => {
        const brick = new CSVToJSON();
        const setResult = jasmine.createSpy();
        const setError = jasmine.createSpy();

        brick.update(new BrickContext(), ['category,author,title,price\nreference,Nigel Rees,Sayings of the Century,8.95'],
            [setResult, setError]);
        expect(setResult).toHaveBeenCalledOnceWith( [{
            'category': 'reference',
            'author': 'Nigel Rees',
            'title': 'Sayings of the Century',
            'price': '8.95'
        }]);
        expect(setError).toHaveBeenCalledTimes(0);
    });

    it('should properly display an error when source is not a string', () => {
        const brick = new CSVToJSON();
        const setResult = jasmine.createSpy();
        const setError = jasmine.createSpy();

        brick.update(new BrickContext(), [100], [setResult, setError]);
        expect(setResult).toHaveBeenCalledTimes(0);
        expect(setError).toHaveBeenCalledTimes(0);
    });

    it('should trigger the error flow given an incorrect csv', () => {
        const brick = new CSVToJSON();
        const setResult = jasmine.createSpy();
        const setError = jasmine.createSpy();

        brick.update(new BrickContext(), ['a,"b,c\nd,e,f'], [setResult, setError]);
        expect(setError).toHaveBeenCalledTimes(1);
        expect(setResult).toHaveBeenCalledTimes(0);
    });
});
