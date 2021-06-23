import ControlFlowSynchronization from '../../src/core/util/ControlflowSynchronization.js';
import {Context} from 'olympe';

describe('ControlFlowSynchronization brick', () => {
    it('should trigger output control flow after the two inputs have been triggered at least once ', () => {
        const brick = new ControlFlowSynchronization();
        const incomingEvent_1 = Date.now();
        const incomingEvent_2 = Date.now();

        const context = new Context();

        const forwardEventSpy = jasmine.createSpy();

        brick.onUpdate(context, [ incomingEvent_1, incomingEvent_2 ], [ forwardEventSpy ]);

        expect(forwardEventSpy).toHaveBeenCalledTimes(1);
    });
});
