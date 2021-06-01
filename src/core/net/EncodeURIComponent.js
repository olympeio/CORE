import { FunctionBrick, registerBrick } from 'olympe';

export default class EncodeURIComponent extends FunctionBrick {

    /**
     * Executed every time an input (str) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {string} str
     * @param {boolean} entireURL
     * @param {function(string)} setEncoded
     */
    onUpdate(context, [str, entireURL], [setEncoded]) {
        setEncoded(entireURL ? encodeURI(String(str)) : encodeURIComponent(String(str)));
    }
}

registerBrick('0179c79a51b43860eb60', EncodeURIComponent);
