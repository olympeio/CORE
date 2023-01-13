import { Brick, BrickContext, registerBrick } from 'olympe';
import { getLogger } from 'logging';
import { performGetFromJSON, processResults } from './helper';

export default class GetFromJSONFunction extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} source
     * @param {string} path
     * @param {function(*)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source, path], [setResult, setErrorFlow]) {
        const logger = getLogger('Get From JSON');

        // Guards
        if (typeof source !== 'object' && typeof source !== 'string') {
            logger.error('Provided source is not object or string');
            return;
        }
        if (typeof path !== 'string') {
            logger.error('Provided path is not a string');
            return;
        }

        performGetFromJSON(source, path, setErrorFlow, (results) => {
            processResults(results, logger, setResult, true);
        }, { wrap: false });
    }
}

registerBrick('0185a96e948f3e09fdbd', GetFromJSONFunction);
