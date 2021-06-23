import {Context} from 'olympe';
import Ticker from "../../src/core/util/Ticker.js";

describe('Ticker brick', () => {
    it('should forward event after right interval', async () => {
        const ticker = new Ticker();

        const context = new Context()
        spyOn(ticker, 'getInputs').and.returnValue(['interval', 'activated']);
        const outputSetter = jasmine.createSpy('ticker');

        ticker.setupUpdate(
            context,
            (inputs) => ticker.onUpdate(context, inputs, [outputSetter]),
            jasmine.createSpy()
        );

        const wait = (time) => new Promise((next) => setTimeout(next, time));

        context.set('interval', 10);
        expect(outputSetter).not.toHaveBeenCalled();
        context.set('activated', true);
        outputSetter.calls.reset();
        await wait(11);
        expect(outputSetter).toHaveBeenCalled();
        outputSetter.calls.reset();
        await wait(5);
        expect(outputSetter).not.toHaveBeenCalled();
        await wait(6);
        expect(outputSetter).toHaveBeenCalled();
        outputSetter.calls.reset();
        context.set('activated', false);
        await wait(11);
        expect(outputSetter).not.toHaveBeenCalled();
    });
});
