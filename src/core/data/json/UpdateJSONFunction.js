import { Brick, BrickContext, registerBrick, ErrorFlow } from 'olympe';
import { getLogger } from 'logging';
import { addToJson } from './UpdateJSONAction.js';

export default class UpdateJSON extends Brick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} source
     * @param {string} path
     * @param {*} newValue
     * @param {function(*)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source, path, newValue], [setResult, setErrorFlow]) {
        const logger = getLogger('Update JSON Function');

        // Guards
        if (!source || (typeof source !== 'object' && typeof source !== 'string')) {
            logger.error('Provided source is not object or string');
            return;
        }
        if (typeof path !== 'string') {
            logger.error('Provided path is not a string');
            return;
        }

        let json;
        try {
            json = (typeof source === 'string') ? JSON.parse(source) : source;
        } catch (e) {
            setErrorFlow(ErrorFlow.create('Error while parsing the source string ' + e.message, 1));
            return;
        }

        if (json === '') {
            json = {};
        }

        // prevent empty path from rising an error in jsonpath
        if (path.length === 0 || path === '$') {
            setErrorFlow(ErrorFlow.create('The path is empty. Specify a property', 1));
        } else {
            setResult(addToJson(json, path, newValue));
        }
    }
}

registerBrick('018009ac7cfb53f4341e', UpdateJSON);
