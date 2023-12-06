import { Brick, registerBrick, Cache } from 'olympe';
import {map} from "rxjs/operators";

export default class IsCacheProcessing extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        return Cache.getProcessingStatus().pipe(map((status) => !!status.processing));
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
