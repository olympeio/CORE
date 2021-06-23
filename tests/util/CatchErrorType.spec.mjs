import CatchErrorType from '../../src/core/util/CatchErrorType.js';
import { ErrorFlow, Context } from 'olympe';

describe('CatchErrorType brick', () => {
    it('should catch an error, then trigger a control flow and spread its details if the input code is the same than the error code', () => {
        const brick = new CatchErrorType();
        const context = new Context();

        const message = 'this is an error message';
        const code = 1234;
        const errorFlow = ErrorFlow.create(message, code);

        const forwardEventSpy = jasmine.createSpy();
        const setErrorFlowSpy = jasmine.createSpy();
        const setMessageSpy = jasmine.createSpy();

        brick.onUpdate(
            context, [errorFlow, code], [forwardEventSpy, setErrorFlowSpy, setMessageSpy]
        );

        expect(forwardEventSpy).toHaveBeenCalled();
        expect(setErrorFlowSpy).not.toHaveBeenCalled();
        expect(setMessageSpy).toHaveBeenCalledWith(message);
    });

    it('should only forward the error flow if the codes are different', () => {
        const brick = new CatchErrorType();
        const context = new Context();

        const message = 'this is an error message';
        const code = 1234;
        const errorFlow = ErrorFlow.create(message, 12345);

        const forwardEventSpy = jasmine.createSpy();
        const setErrorFlowSpy = jasmine.createSpy();
        const setMessageSpy = jasmine.createSpy();

        brick.onUpdate(
            context, [errorFlow, code], [forwardEventSpy, setErrorFlowSpy, setMessageSpy]
        );

        expect(forwardEventSpy).not.toHaveBeenCalled();
        expect(setErrorFlowSpy).toHaveBeenCalledWith(errorFlow);
        expect(setMessageSpy).not.toHaveBeenCalled();
    });
});
