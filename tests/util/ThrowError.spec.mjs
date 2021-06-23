import ThrowError from '../../src/core/util/ThrowError.js';
import {Context, ErrorFlow} from 'olympe';

describe('ThrowError brick', () => {
    xit('should generate an ErrorFlow correctly', () => {
        const brick = new ThrowError();
        spyOn(brick, 'getInputs').and.returnValue(['event', 'message', 'code']);

        const message = 'this is an error message';
        const code = 1234;

        const context = new Context();

        const errorFlowSpy = jasmine.createSpy();
        const clearer = jasmine.createSpy();

        brick.setupUpdate(
            context,
            (inputs) => brick.onUpdate(context, inputs, [errorFlowSpy]),
            clearer
        );

        context.set('event', Date.now());
        expect(errorFlowSpy).toHaveBeenCalled();
        errorFlowSpy.calls.reset();

        context.set('message', message);
        context.set('code', code);
        expect(errorFlowSpy).not.toHaveBeenCalled();
        context.set('event', Date.now());
        expect(errorFlowSpy).toHaveBeenCalledOnceWith(ErrorFlow.create(message, code));
        errorFlowSpy.calls.reset();

    });
});
