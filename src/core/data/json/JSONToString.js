import { Brick, BrickContext, registerBrick, ErrorFlow } from 'olympe';
import { getLogger } from 'logging';

export default class JSONToString extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} source
     * @param {number} spaces
     * @param {function(string)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source, spaces], [setResult, setErrorFlow]) {
        const logger = getLogger('JSON To String');

        // Guards
        if (typeof source !== 'object' && typeof source !== 'string') {
            logger.error('Provided source input is not an object');
            return;
        }
        if (typeof spaces !== 'number') {
            logger.error('Provided spaces input is not a number');
            return;
        }

        let json;
        try {
            json = (typeof source === 'string') ? JSON.parse(source) : source;
        } catch (e) {
            setErrorFlow(ErrorFlow.create('Error while parsing the source string ' + e.message, 1));
            return;
        }

        setResult(JSON.stringify(json, undefined, spaces));
    }
}

registerBrick('017e4d9edd7c2437c474', JSONToString);
