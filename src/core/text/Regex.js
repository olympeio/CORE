
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**

**/
export default class Regex extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} text
     * @param {string} regex
     * @param {function(boolean)} setMatched
     * @param {function(Array)} setMatchElements
     */
    onUpdate(context, [text, regex], [setMatched, setMatchElements]) {
        const result = new RegExp(regex).exec(text);
        if (result === null) {
            setMatched(false);
            setMatchElements([]);
        } else {
            setMatched(true);
            setMatchElements(result.slice(0,result.length));
        }
    }
}

registerBrick('016cb429d2e316b6478a', Regex);
