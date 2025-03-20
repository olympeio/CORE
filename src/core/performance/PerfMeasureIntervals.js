import { ActionBrick, registerBrick } from 'olympe';
import { performanceContainer } from '../../helpers/common/perf-container';
import { getLogger } from '../../helpers/logging';

export default class PerfMeasureIntervals extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} firstMark
     * @param {string} lastMark
     * @param {boolean} logAndClear
     * @param {function()} forwardEvent
     */
    update($, [firstMark, lastMark, logAndClear], [forwardEvent]) {
        const performance = performanceContainer.performance;
        const logger = getLogger('Performance');
        const marks = performance.getEntriesByType('mark');
        const nbMarks = marks.length;
        if (nbMarks <= 1) {
            logger.warn('No measure available, no more than one mark found');
            forwardEvent();
            return;
        }

        let takeMark = !firstMark; // if no firstMark, we take marks from the beginning
        const marksToTake = [];
        // Loop over the existing marks and push all the once registered between the `firstMark` and the `lastMark`.
        for (const mark of marks) {
            if (takeMark) {
                marksToTake.push(mark);
            }
            if (mark.name === firstMark) {
                takeMark = true;
            }
            if (mark.name === lastMark) {
                break;
            }
        }

        if (marksToTake.length < 2) {
            logger.warn('No measure available, not enough marks found');
            forwardEvent();
            return;
        }

        const mark1 = marksToTake[0].name;
        const mark2 = marksToTake[marksToTake.length - 1].name;
        performance.measure(`${mark1} --> ${mark2} [total]`, mark1, mark2);
        for (let i = 0; i < marksToTake.length - 1; i++) {
            const mark1 = marksToTake[i].name;
            const mark2 = marksToTake[i + 1].name;
            performance.measure(`  * ${mark1} --> ${mark2}`, mark1, mark2);
        }

        if (logAndClear) {
            const measures = performance.getEntriesByType('measure');
            for (const measure of measures) {
                logger.info(measure.name, measure.duration.toFixed(2), 'ms');
            }
            performance.clearMarks();
            performance.clearMeasures();
        }
        forwardEvent();
    }
}

registerBrick('0193770d209e4fb78fe5', PerfMeasureIntervals);
