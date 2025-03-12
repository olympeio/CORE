import { Brick, registerBrick } from 'olympe';
import { performanceContainer } from '../../helpers/common/perf-container';

export default class PerfMeasure extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} measureName
     * @param {string} startMark
     * @param {string} endMark
     * @param {function()} forwardEvent
     */
    update($, [measureName, startMark, endMark], [forwardEvent]) {
        const performance = performanceContainer.performance;
        performance.measure(measureName, startMark, endMark);
        forwardEvent();
    }
}

registerBrick('0193770ce50c12ef7410', PerfMeasure);
