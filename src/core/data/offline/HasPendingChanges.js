import { Brick, registerBrick, Cache } from 'olympe';

export default class HasPendingChanges extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        return Cache.hasPendingChanges();
    }

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {boolean} value
     * @param {function(boolean)} setHasPendingChanges
     */
    update(context, [value], [setHasPendingChanges]) {
        setHasPendingChanges(value);
    }
}

registerBrick('018a183dd3b7debf3dbd', HasPendingChanges);
