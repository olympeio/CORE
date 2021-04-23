import { FunctionBrick, registerBrick, Context } from 'olympe';

export default class Contains extends FunctionBrick {

    /**
     * Executed every time an input (s1, s2) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {string} s1
     * @param {string} s2
     * @param {function(boolean)} setResult
     */
    onUpdate(context, [s1, s2], [setResult]) {
        setResult(String(s1).includes(s2));
    }
}

registerBrick('01626bf8811fa380be1c', Contains);
