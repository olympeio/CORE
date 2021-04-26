import { FunctionBrick, registerBrick } from 'olympe';

export default class Min extends FunctionBrick {

    /**
     * Executed every time an input (a, b) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {number} a
     * @param {number} b
     * @param {function(number)} setAb
     */
    onUpdate(context, [a, b], [setAb]) {
        setAb(Math.min(a, b));
    }
}

registerBrick('01632b4862090dbd2bbe', Min);
