import CreateList from '../../../src/core/data/list/CreateList.js';
import {Context} from 'olympe';

describe('Create brick', () => {
    it('should correctly create a list', () => {
        const brick = new CreateList();
        const context = new Context();

        const setListSpy = jasmine.createSpy();
        const forwardEventSpy = jasmine.createSpy();

        brick.onUpdate(context, [], [forwardEventSpy, setListSpy]);

        expect(setListSpy).toHaveBeenCalledOnceWith([]);
        expect(forwardEventSpy).toHaveBeenCalled();
    });
});
