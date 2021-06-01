import { FunctionBrick, registerBrick } from 'olympe';

export default class DecodeURIComponent extends FunctionBrick {

    /**
     * Executed every time an input (str) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {string} str
     * @param {function(string)} setDecoded
     */
    onUpdate(context, [str], [setDecoded]) {
        setDecoded(decodeURIComponent(String(str)));
    }
}

registerBrick('0179c79a6fb65e17624d', DecodeURIComponent);
