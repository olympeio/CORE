import { Brick, registerBrick } from 'olympe';
import { performanceContainer } from '../../helpers/common/perf-container';

export default class PerfClearMeasures extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     */
    update($, inputs, [forwardEvent]) {
        const performance = performanceContainer.performance;
        performance.clearMeasures();
        forwardEvent();
    }
}

registerBrick('01937711ba67dda563d7', PerfClearMeasures);
