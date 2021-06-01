import Branch from '../../src/core/util/Branch.js';
import {Context} from "olympe";
import {BehaviorSubject} from "rxjs";

describe('Branch brick', () => {

    it('should trigger the right output', () => {
        const branch = new Branch();
        const conditionInput = new BehaviorSubject(null);
        const incomingEventInput = new BehaviorSubject(null);

        spyOn(branch, 'listenToInput').and.returnValues(conditionInput, incomingEventInput);
        const context = new Context();

        const trueDispatcher = jasmine.createSpy();
        const falseDispatcher = jasmine.createSpy();
        const clearer = jasmine.createSpy();

        branch.configCoreUpdate(
            context,
            (inputs) => branch.onUpdate(context, inputs, [trueDispatcher, falseDispatcher]),
            clearer
        );

        incomingEventInput.next(Date.now());
        expect(falseDispatcher).toHaveBeenCalled();
        expect(trueDispatcher).not.toHaveBeenCalled();
        trueDispatcher.calls.reset(); falseDispatcher.calls.reset();

        conditionInput.next(true);
        expect(falseDispatcher).not.toHaveBeenCalled();
        expect(trueDispatcher).not.toHaveBeenCalled();
        incomingEventInput.next(Date.now());
        expect(falseDispatcher).not.toHaveBeenCalled();
        expect(trueDispatcher).toHaveBeenCalled();
        trueDispatcher.calls.reset(); falseDispatcher.calls.reset();

        conditionInput.next(false);
        incomingEventInput.next(Date.now());
        expect(falseDispatcher).toHaveBeenCalled();
        expect(trueDispatcher).not.toHaveBeenCalled();
    });
});
