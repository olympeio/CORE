import { FunctionBrick, registerBrick } from 'olympe';

/**
NO DOC
**/
export default class LengthInPercent extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} percent
     * @param {number} containerLength
     * @param {function(number)} setResult
     */
    onUpdate(context, [percent, containerLength], [setResult]) {
        setResult(containerLength * percent / 100);
    }
}

registerBrick('016f8f8416f002ae2b00', LengthInPercent);
