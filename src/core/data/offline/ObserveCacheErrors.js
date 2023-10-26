import { Brick, registerBrick, Cache, ErrorFlow } from 'olympe';

export default class ObserveCacheErrors extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        return Cache.getProcessingErrors();
    }

    /**
     * @override
     * @protected
     * @param {BrickContext} $
     * @param {Error} error
     * @param {function(*)} setLatestError
     */
    update($, [error], [setLatestError]) {
        setLatestError(ErrorFlow.create(error.message, 0));
    }
}

registerBrick('018ab2c18f102b13b57f', ObserveCacheErrors);
