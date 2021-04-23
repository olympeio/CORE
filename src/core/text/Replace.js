import { FunctionBrick, registerBrick, Context } from 'olympe';

export default class Replace extends FunctionBrick {

    /**
     * Executed every time an input (s, pattern, replacement) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {string} s
     * @param {string} pattern
     * @param {string} replacement
     * @param {function(string)} setNewString
     */
    onUpdate(context, [s, pattern, replacement], [setNewString]) {
        setNewString(String(s).replace(pattern, replacement));
    }
}

registerBrick('01717ca5bc4613380144', Replace);
