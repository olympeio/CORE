import { Brick, registerBrick } from 'olympe';

export default class GetNodeMemoryUsage extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     * @param {function(number)} setRSS
     * @param {function(number)} setHeapTotal
     * @param {function(number)} setHeapUsed
     */
    update($, inputs, [forwardEvent, setRSS, setHeapTotal, setHeapUsed]) {
        if (!process || !process.memoryUsage) {
            $.throw(new Error('This brick can only be used in a Node.js environment.'));
            return;
        }
        const { rss, heapTotal, heapUsed } = process.memoryUsage();
        // Format the amount in "Mb" ?
        const formatMemoryUsage = (data) => Math.round(data / 1024 / 1024 * 100) / 100;
        setRSS(formatMemoryUsage(rss));
        setHeapTotal(formatMemoryUsage(heapTotal));
        setHeapUsed(formatMemoryUsage(heapUsed));
        forwardEvent();
    }
}

registerBrick('01937713c6a321d8f5fe', GetNodeMemoryUsage);
