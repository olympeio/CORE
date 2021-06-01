import { FunctionBrick, registerBrick } from 'olympe';

export default class EncodeURIComponent extends FunctionBrick {

    /**
     * Executed every time an input (str) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {string} str
     * @param {function(string)} setEncoded
     */
    onUpdate(context, [str], [setEncoded]) {
        setEncoded(encodeURIComponent(String(str)));
    }
}

registerBrick('0179c79a51b43860eb60', EncodeURIComponent);
