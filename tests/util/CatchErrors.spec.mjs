import CatchErrors from '../../src/core/util/CatchErrors.js';
import {Context, ErrorFlow} from 'olympe';

describe('CatchErrors brick', () => {
    it('should catch an error, then trigger a control flow and spread its details', () => {
        const brick = new CatchErrors();
        const context = new Context();

        const message = 'this is an error message';
        const code = 1234;
        const errorFlow = ErrorFlow.create(message, code);

        const forwardEventSpy = jasmine.createSpy();
        const setMessageSpy = jasmine.createSpy();
        const setCodeSpy = jasmine.createSpy();

        brick.onUpdate(
            context, [errorFlow], [forwardEventSpy, setMessageSpy, setCodeSpy]
        );

        expect(forwardEventSpy).toHaveBeenCalled();
        expect(setCodeSpy).toHaveBeenCalledWith(code);
        expect(setMessageSpy).toHaveBeenCalledWith(message);
    });
});
