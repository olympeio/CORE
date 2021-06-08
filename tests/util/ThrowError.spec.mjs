import ThrowError from '../../src/core/util/ThrowError.js';
import {Context, ErrorFlow} from 'olympe';
import {BehaviorSubject} from 'rxjs';

describe('ThrowError brick', () => {
    it('should generate an ErrorFlow correctly', () => {
        const brick = new ThrowError();

        const message = 'this is an error message';
        const code = 1234;

        const messageInput = new BehaviorSubject(null);
        const codeInput = new BehaviorSubject(null);
        const incomingEventInput = new BehaviorSubject(null);

        spyOn(brick, 'listenToInput').and.returnValues(messageInput, codeInput, incomingEventInput);
        const context = new Context();

        const errorFlowSpy = jasmine.createSpy();
        const clearer = jasmine.createSpy();

        brick.configCoreUpdate(
            context,
            (inputs) => brick.onUpdate(context, inputs, [errorFlowSpy]),
            clearer
        );

        incomingEventInput.next(Date.now());
        expect(errorFlowSpy).toHaveBeenCalled();
        errorFlowSpy.calls.reset();

        messageInput.next(message);
        codeInput.next(code);
        expect(errorFlowSpy).not.toHaveBeenCalled();
        incomingEventInput.next(Date.now());
        expect(errorFlowSpy).toHaveBeenCalledOnceWith(ErrorFlow.create(message, code));
        errorFlowSpy.calls.reset();

    });
});
