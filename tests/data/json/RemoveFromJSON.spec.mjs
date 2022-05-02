import RemoveFromJSON from '../../../src/core/data/json/RemoveFromJSON.js';
import { BrickContext } from 'olympe';

describe('RemoveFromJSON brick', () => {
    it('should correctly remove by path (on a json document of type object)', () => {
        const brick = new RemoveFromJSON();
        const inputJson = '{"a":"test","b":{}}';
        const expectedResult = {"a":"test"};

        const context = new BrickContext();
        const forwardEvent = jasmine.createSpy().and.callFake(() => {});
        const setResult = jasmine.createSpy().and.callFake(() => {});
        const setError = jasmine.createSpy().and.callFake(() => {});
        brick.update(context, [inputJson, 'b'], [forwardEvent, setResult, setError]);

        expect(setResult).toHaveBeenCalledWith(expectedResult);
        expect(setError).toHaveBeenCalledTimes(0);
    });

    it('should correctly remove by path in array (on a json document of type object)', () => {
        const brick = new RemoveFromJSON();
        const inputJson = {"store": { "book": [{ "category": "reference", "author": "Nigel Rees"},{ "category": "fiction", "author": "Evelyn Waugh" }]}};
        const path = 'store.book.[category]';
        const expectedResult = {"store":{"book":[{"author":"Nigel Rees"},{"author":"Evelyn Waugh"}]}};

        const forwardEvent = jasmine.createSpy().and.callFake(() => {});
        const setResult = jasmine.createSpy();
        const setError = jasmine.createSpy();

        brick.update(new BrickContext(), [inputJson, path], [forwardEvent, setResult, setError]);
        expect(setResult).toHaveBeenCalledOnceWith(expectedResult);
        expect(setError).toHaveBeenCalledTimes(0);
    });

    it('should return null when no result found', () => {
        const brick = new RemoveFromJSON();
        const inputJson = {"store": { "book": [{ "category": "reference", "author": "Nigel Rees"},{ "category": "fiction", "author": "Evelyn Waugh" }]}};
        const path = 'store.book.category';

        const forwardEvent = jasmine.createSpy().and.callFake(() => {});
        const setResult = jasmine.createSpy();
        const setError = jasmine.createSpy();

        brick.update(new BrickContext(), [inputJson, path], [forwardEvent, setResult, setError]);
        expect(setResult).toHaveBeenCalledOnceWith(null);
        expect(setError).toHaveBeenCalledTimes(1);
    });

    it('should not execute if the source is not a string or json', () => {
        const brick = new RemoveFromJSON();
        const input = 100;
        const path = 'store.book';

        const forwardEvent = jasmine.createSpy().and.callFake(() => {});
        const setResult = jasmine.createSpy();
        const setError = jasmine.createSpy();

        const run = () => brick.update(new BrickContext(), [input, path], [forwardEvent, setResult, setError]);
        expect(forwardEvent).not.toHaveBeenCalled();
        expect(setResult).not.toHaveBeenCalled();
    });
});
