import { FunctionBrick, registerBrick, Context } from 'olympe';

export default class Divide extends FunctionBrick {

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
        setAb(a/b);
    }
}

registerBrick('01626cab8ad21701ca50', Divide);
