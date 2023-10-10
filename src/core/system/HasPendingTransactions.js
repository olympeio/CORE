import { Brick, registerBrick, Cache } from 'olympe';

export default class HasPendingTransactions extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        return Cache.hasPendingTransactions($);
    }

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {boolean} value
     * @param {function(boolean)} setHasPendingTransactions
     */
    update(context, [value], [setHasPendingTransactions]) {
        setHasPendingTransactions(value);
    }
}

registerBrick('018a183dd3b7debf3dbd', HasPendingTransactions);
