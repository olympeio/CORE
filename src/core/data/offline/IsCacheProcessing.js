import { Brick, registerBrick, Cache } from 'olympe';

export default class IsCacheProcessing extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        return Cache.isProcessing();
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {boolean} isProcessing
     * @param {function(boolean)} setIsProcessing
     */
    update($, [isProcessing], [setIsProcessing]) {
        setIsProcessing(isProcessing);
    }
}

registerBrick('018ab2c1665e4f5c29a8', IsCacheProcessing);
