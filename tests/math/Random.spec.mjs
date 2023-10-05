import {BrickContext} from 'olympe';
import RandomAction from "../../src/core/math/RandomAction.ts";

describe('Random brick', () => {

    it('should return a random value between 0 and 1', () => {
        const func = new RandomAction();
        const controlFlowOut = jasmine.createSpy();
        const valueOut = jasmine.createSpy();
        func.update(new BrickContext().createChild(), [new Date()], [controlFlowOut, valueOut]);

        // expect single value between 0 and 1
        expect(controlFlowOut).toHaveBeenCalledTimes(1);
        expect(valueOut).toHaveBeenCalledTimes(1);
        const value = valueOut.calls.mostRecent().args[0];
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThan(1);
    });

});
