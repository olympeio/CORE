
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
NO DOC
**/
export default class CenterOrMiddle extends FunctionBrick {

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
        setResult((containerWidth - elementWidth) / 2);
    }
}

registerBrick('016f8a9d9ea15c1f31c2', CenterOrMiddle);
