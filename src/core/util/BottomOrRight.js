import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
NO DOC
**/
export default class BottomOrRight extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} elementWidth
     * @param {number} containerWidth
     * @param {function(number)} setResult
     */
    onUpdate(context, [elementWidth, containerWidth], [setResult]) {
        setResult(containerWidth - elementWidth);
    }
}

registerBrick('016f8faecb7baf694d81', BottomOrRight);
