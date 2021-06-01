
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
NO DOC
**/
export default class TopOrLeft extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} inputs
     * @param {function(number)} setResult
     */
    onUpdate(context, [], [setResult]) {
        setResult(0);
    }
}

registerBrick('016f8f7c09e96f326d3d', TopOrLeft);
