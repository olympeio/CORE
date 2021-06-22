import Branch from '../../src/core/util/Branch.js';
import {Context} from "olympe";

describe('Branch brick', () => {

    it('should trigger the right output', () => {
        const branch = new Branch();
        spyOn(branch, 'getInputs').and.returnValue(['event', 'condition']);

        const context = new Context('branch');

        const trueDispatcher = jasmine.createSpy('true');
        const falseDispatcher = jasmine.createSpy('false');
        const clearer = jasmine.createSpy();

        branch.setupUpdate(
            context,
            (inputs) => branch.onUpdate(context, inputs, [trueDispatcher, falseDispatcher]),
            clearer
        );

        context.set('event', Date.now());
        expect(falseDispatcher).toHaveBeenCalled();
        expect(trueDispatcher).not.toHaveBeenCalled();
        trueDispatcher.calls.reset(); falseDispatcher.calls.reset();

        context.set('condition', true);
        expect(falseDispatcher).not.toHaveBeenCalled();
        expect(trueDispatcher).not.toHaveBeenCalled();
        context.set('event', Date.now());
        expect(falseDispatcher).not.toHaveBeenCalled();
        expect(trueDispatcher).toHaveBeenCalled();
        trueDispatcher.calls.reset(); falseDispatcher.calls.reset();

        context.set('condition', false);
        context.set('event', Date.now());
        expect(falseDispatcher).toHaveBeenCalled();
        expect(trueDispatcher).not.toHaveBeenCalled();
    });
});
