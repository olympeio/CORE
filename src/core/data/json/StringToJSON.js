import { Brick, BrickContext, registerBrick, ErrorFlow } from 'olympe';
import { getLogger } from 'logging';

export default class StringToJSON extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} source
     * @param {function(*)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source], [setResult, setErrorFlow]) {
        const logger = getLogger('String To JSON');

        // Guards
        if (typeof source !== 'string') {
            logger.error('Provided source is not object or string');
            return;
        }

        let json;
        try {
            json = JSON.parse(source);
        } catch (e) {
            setErrorFlow(ErrorFlow.create('Error while parsing the source string: ' + e.message, 1));
            setResult(null);
            return;
        }
        setResult(json);
    }
}

registerBrick('017fb86369ddd44d4a93', StringToJSON);
