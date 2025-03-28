import { Brick, BrickContext, registerBrick, ErrorFlow } from 'olympe';
import { getLogger } from 'logging';
import { JSONPath } from 'jsonpath-plus';

export default class RemoveFromJSON extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} source
     * @param {string} path
     * @param {function()} forwardEvent
     * @param {function(*)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source, path], [forwardEvent, setResult, setErrorFlow]) {
        const logger = getLogger('Remove From JSON');

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
        if (path.length === 0) {
            setErrorFlow(ErrorFlow.create('The path is empty', 1));
        } else {
            const results = JSONPath({
                path: path,
                json: json,
                resultType: 'all',
            });

            // the path was found
            if (results && results.length > 0) {
                results.forEach(foundProperty => {
                    let { parent, parentProperty, value } = foundProperty;
                    // remove object from array
                    if (parent && Array.isArray(parent)) {
                        const index = parent.indexOf(value);
                        parent.splice(index, 1);
                    } else if (parent) {
                        delete parent[parentProperty];
                    } else {
                        // clear root
                        json = {};
                    }
                });

                setResult(json);
                forwardEvent();
            } else {
                setErrorFlow(ErrorFlow.create('The path was not found', 1));
                setResult(null);
            }
        }
    }
}

registerBrick('017fb761ae7674ea17de', RemoveFromJSON);
