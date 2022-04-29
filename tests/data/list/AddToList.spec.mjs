import AddToListFunction from '../../../src/core/data/list/AddToListFunction.js';
import AddToListAction from '../../../src/core/data/list/AddToListAction.js';
import testEqual from '../../helpers/testEqual.mjs';
import MockSync from '../../helpers/MockSync.mjs';
import { BrickContext, ListDef } from 'olympe';

describe('AddToList bricks', () => {
    it('should add a Sync to a ListDef', () => {
        const firstObject = new MockSync('0');
        firstObject.setProperty('1', 0);

        let list = new ListDef(firstObject, []);
        const newObject = new MockSync('1');
        newObject.setProperty('1', 1);

        const brick = new AddToListFunction();
        const setResult = jasmine.createSpy().and.callFake(() => { });
        const setError = jasmine.createSpy().and.callFake(() => { });
        const expectedList = list.union(new ListDef(newObject, []));

        brick.update(new BrickContext(), [list, newObject], [setResult, setError]);
        expect(setResult).toHaveBeenCalledOnceWith(expectedList);
        expect(setError).toHaveBeenCalledTimes(0);
    });

    it('should add an object to an Array - function', () => {
        const brick = new AddToListFunction();
        const setResult = jasmine.createSpy().and.callFake(() => { });
        const setError = jasmine.createSpy().and.callFake(() => { });

        brick.update(new BrickContext(), [[1, 2, 3, 4, 5], 6], [setResult, setError]);
        expect(setResult).toHaveBeenCalledOnceWith([1, 2, 3, 4, 5, 6]);
        expect(setError).toHaveBeenCalledTimes(0);

        testEqual(brick, [['a', 'b'], 'c'], [['a', 'b', 'c']]);
        testEqual(brick, [[true, true], false], [[true, true, false]]);
    });

    it('should add an object to an Array - action', () => {
        const brick = new AddToListAction();
        const forwardEventSpy = jasmine.createSpy();
        const setListSpy = jasmine.createSpy();
        setListSpy.calls.reset();

        brick.update(new BrickContext(), [[1, 2, 3, 4, 5], 6], [forwardEventSpy, setListSpy]);
        expect(setListSpy).toHaveBeenCalledOnceWith([1, 2, 3, 4, 5, 6]);
        expect(forwardEventSpy).toHaveBeenCalled();
    });

    it('should not execute if the list is not a ListDef nor an Array', () => {
        const brick = new AddToListFunction();
        const setResult = jasmine.createSpy().and.callFake(() => { });
        const setError = jasmine.createSpy().and.callFake(() => { });

        brick.update(new BrickContext(), ['Hello', 6], [setResult, setError]);
        expect(setResult).not.toHaveBeenCalled();
        expect(setError).toHaveBeenCalled();

        const actionBrick = new AddToListAction();
        const forwardEvent = jasmine.createSpy();
        setResult.calls.reset();

        actionBrick.update(new BrickContext(), ['Hello', 6], [forwardEvent, setResult, setError]);
        expect(setResult).not.toHaveBeenCalled();
        expect(forwardEvent).not.toHaveBeenCalled();
        expect(setError).toHaveBeenCalled();
    });

    it('should not execute if we add a non-Sync object to a ListDef', () => {
        const firstObject = new MockSync('0');
        firstObject.setProperty('1', 0);

        let list = new ListDef(firstObject, []);

        const brick = new AddToListFunction();
        const setResult = jasmine.createSpy().and.callFake(() => { });
        const setError = jasmine.createSpy().and.callFake(() => { });

        brick.update(new BrickContext(), [list, 'non-sync'], [setResult, setError]);
        expect(setResult).not.toHaveBeenCalled();
        expect(setError).toHaveBeenCalledTimes(1);
    });
});
