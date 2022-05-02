import { Brick, BrickContext, registerBrick, ErrorFlow } from 'olympe';
import { getLogger } from 'logging';
import { JSONPath } from 'jsonpath-plus';

export default class GetFromJSON extends Brick {

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
        if (path.length === 0) {
            setErrorFlow(ErrorFlow.create('The path is empty', 1));
        } else {
            // support access of array using syntax [i] (legacy spec)
            if (path.startsWith('[')) {
                path = '$' + path;
            }

            let resultArray;
            try {
                resultArray = JSONPath(path, json);
            } catch (e) {
                setErrorFlow(ErrorFlow.create('Error with provided path: ' + e.message, 1));
                return;
            }

            if (resultArray.length === 1) {
                // If only one result, unwrap and return it
                setResult(resultArray[0]);
            } else if (resultArray.length > 1) {
                setResult(resultArray);
            } else {
                logger.warn('No result found matching provided path');
                setResult(null);
            }
        }
    }
}

registerBrick('017fb123b9c91dd2f6a2', GetFromJSON);
