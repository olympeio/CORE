import { Brick, registerBrick, Process } from 'olympe';

export default class IsOnline extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        return Process.isOnline($);
    }

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {boolean} value
     * @param {function(boolean)} setResult
     */
    update(context, [value], [setResult]) {
        setResult(value);
    }

}

registerBrick('0189f81c7eb9e6ba425b', IsOnline);
