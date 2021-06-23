import { FunctionBrick, registerBrick } from 'olympe';

export default class DecodeURIComponent extends FunctionBrick {

    /**
     * Executed every time an input (str) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {string} str
     * @param {boolean} entireURL
     * @param {function(string)} setDecoded
     */
    onUpdate(context, [str, entireURL], [setDecoded]) {
        setDecoded(entireURL ? decodeURIComponent(String(str)) : decodeURI(String(str)));
    }
}

registerBrick('0179c79a6fb65e17624d', DecodeURIComponent);
