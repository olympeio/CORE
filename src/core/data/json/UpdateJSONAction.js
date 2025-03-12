import { Brick, BrickContext, registerBrick, ErrorFlow } from 'olympe';
import { getLogger } from 'logging';
import { JSONPath } from 'jsonpath-plus';

export default class UpdateJSONAction extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} source
     * @param {string} path
     * @param {*} newValue
     * @param {function()} forwardEvent
     * @param {function(*)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source, path, newValue], [forwardEvent, setResult, setErrorFlow]) {
        const logger = getLogger('Update JSON Action');

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

        // prevent empty path from rising an error in jsonpath
        if (path.length === 0 || path === '$') {
            setErrorFlow(ErrorFlow.create('The path is empty. Specify a property', 1));
        } else {
            setResult(addToJson(json, path, newValue));
            forwardEvent();
        }
    }
}

/**
 *
 * @param {!Object|string} json
 * @param {string} path
 * @param {!Object} newValue
 * @return {!Object}
 */
export const addToJson = (json, path, newValue) => {
    if (json === '') {
        json = {};
    }

    const results = JSONPath({
        path: path,
        json: json,
        resultType: 'all',
    });

    const arrayOfProps = path.split('.');
    const lastProperty = arrayOfProps.pop();
    const jsonPath = arrayOfProps.join('.');

    if (results === undefined || results === null) {
        return json;
    }
    // the path wasn't found - add value to new property
    if (results.length === 0) {
        JSONPath({
            path: jsonPath.length === 0 ? '$' : jsonPath, // use root if jsonPath contained only one property
            json: json,
            resultType: 'all',
            callback(payload) {
                let { parent, parentProperty, value } = payload;

                // add new value to the root
                if (!parent) {
                    value[lastProperty] = newValue;
                    payload.parent = value;
                } else {
                    // the property already contains array of objects
                    if (Array.isArray(parent[parentProperty])) {
                        parent[parentProperty].map(object => {
                            object[lastProperty] = newValue;
                            return object;
                        });
                    }
                    // the property already contains value, not object
                    else if (typeof parent[parentProperty] !== 'object') {
                        parent[parentProperty] = {};
                        parent[parentProperty][value] = value;
                        parent[parentProperty][lastProperty] = newValue;
                    } else {
                        parent[parentProperty][lastProperty] = newValue;
                    }
                }

                return payload;
            }
        });
    }
    // update the existing property
    else {
        results.forEach(foundProperty => {
            let { parent, parentProperty } = foundProperty;
            if (parent) {
                parent[parentProperty] = newValue;
            } else {
                // add new value to the root
                parent = {};
                parent[lastProperty] = newValue;
            }
        });
    }

    return json;
}

registerBrick('017fb1cbae19910b35da', UpdateJSONAction);
