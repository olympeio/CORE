import { ActionBrick, registerBrick } from 'olympe';
import { performanceContainer } from '../../helpers/common/perf-container';
import { getLogger } from '../../helpers/logging';

export default class PerfLogMeasures extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     *      * @param {!string} prefix
     * @param {function()} forwardEvent
     */
    update($, [prefix], [forwardEvent]) {
        const performance = performanceContainer.performance;
        const logger = getLogger('Performance');
        const measures = performance.getEntriesByType('measure');
        for (const measure of measures) {
            logger.info(`${prefix}:`, measure.name, measure.duration.toFixed(2), 'ms');
        }
        forwardEvent();
    }
}

registerBrick('01937711d3d7bd486e27', PerfLogMeasures);
