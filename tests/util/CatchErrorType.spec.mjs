import CatchErrorType from '../../src/core/util/CatchErrorType.js';
import {BehaviorSubject} from 'rxjs';
import {Context, ErrorFlow} from 'olympe';

describe('CatchErrorType brick', () => {
    it('should catch an error, then trigger a control flow and spread its details', () => {
        const brick = new CatchErrorType();
        const incomingError = new BehaviorSubject(null);

        spyOn(brick, 'listenToInput').and.returnValues(incomingError);
        const context = new Context();

        const message = 'this is an error message';
        const code = 1234;
        const errorFlow = ErrorFlow.create(message, code);

        const forwardEventSpy = jasmine.createSpy();
        const setMessageSpy = jasmine.createSpy();
        const setCodeSpy = jasmine.createSpy();

        brick.onUpdate(
            context, [ errorFlow ], [ forwardEventSpy, setMessageSpy, setCodeSpy ]
        );

        expect(forwardEventSpy).toHaveBeenCalled();
        expect(setCodeSpy).toHaveBeenCalledWith(code);
        expect(setMessageSpy).toHaveBeenCalledWith(message);
    });
});
