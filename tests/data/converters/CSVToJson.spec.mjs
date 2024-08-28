import { BrickContext } from 'olympe';
import CSVToJSON from '../../../src/core/data/converters/CSVToJSON.js';

describe('CSVToJSON brick', () => {
    it('should properly parse csv to json', async () => {
        const brick = new CSVToJSON();
        const setResult = jasmine.createSpy();
        await brick.update(new BrickContext(), ['category,author,title,price\nreference,Nigel Rees,Sayings of the Century,8.95'],
            [setResult]);
        expect(setResult).toHaveBeenCalledOnceWith( [{
            'category': 'reference',
            'author': 'Nigel Rees',
            'title': 'Sayings of the Century',
            'price': '8.95'
        }]);
    });

    it('should properly display an error when source is not a string', async () => {
        const brick = new CSVToJSON();
        const setResult = jasmine.createSpy();
        await expectAsync(brick.update(new BrickContext(), [100], [setResult])).toBeRejected();
        expect(setResult).toHaveBeenCalledTimes(0);
    });

    it('should trigger the error flow given an incorrect csv', async () => {
        const brick = new CSVToJSON();
        const setResult = jasmine.createSpy();
        await expectAsync(brick.update(new BrickContext(), ['a,"b,c\nd,e,f'], [setResult])).toBeRejected();
        expect(setResult).toHaveBeenCalledTimes(0);
    });
});
