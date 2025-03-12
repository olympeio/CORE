import { Brick, registerBrick } from 'olympe';
import { performanceContainer } from '../../helpers/common/perf-container';

export default class PerfMark extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} name
     * @param {function()} forwardEvent
     */
    update($, [name], [forwardEvent]) {
        const performance = performanceContainer.performance;
        performance.mark(name);
        forwardEvent();
    }
}

registerBrick('0193770ccc311b1c9ae1', PerfMark);
