import { ActionBrick, registerBrick } from 'olympe';
import { performanceContainer } from '../../helpers/common/perf-container';

export default class PerfClearMarks extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     */
    update($, inputs, [forwardEvent]) {
        const performance = performanceContainer.performance;
        performance.clearMarks();
        forwardEvent();
    }
}

registerBrick('01937711a36078c25926', PerfClearMarks);
