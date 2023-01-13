import { ErrorFlow } from 'olympe';
import { JSONPath } from 'jsonpath-plus';

/**
 * @param {*} source
 * @param {string} path
 * @param {function(?ErrorFlow)} onFailure
 * @param {function(*)} onSuccess
 */
export const performGetFromJSON = (source, path, onFailure, onSuccess) => {
    const { json, error } = getAsJson(source);
    if (error !== null) {
        onFailure(ErrorFlow.create(error.message, error.code));
    } else if (path.length === 0) { // prevent empty path from rising an error in jsonpath
        onFailure(ErrorFlow.create('The path is empty', 1));
    } else {
        const { results, resultsError } = getByJSONPath(json, path);
        if (resultsError) {
            onFailure(ErrorFlow.create('Error with provided path: ' + resultsError.message, 1));
        } else {
            onSuccess(results);
        }
    }
};

/**
 * @param {*} data
 * @return {Object}
 */
export const getAsJson = data => {
    try {
        const dataJson = (typeof data === 'string') ? JSON.parse(data) : data;
        return { json: dataJson, error: null };
    } catch (e) {
        const error = { message: 'Error while parsing the source string: ' + e.message, code: 1 };
        return { json: null, error: error };
    }
};

/**
 * @param {string|Object} data
 * @param {string} path
 * @return (!Object)
 */
export const getByJSONPath = (data, path) => {
    const json = data === '' ? {} : data;

    // support access of array using syntax [i] (legacy spec)
    if (path.startsWith('[')) {
        path = '$' + path;
    }

    let results = null;
    try {
        results = JSONPath(path, json);
        return { results: results, resultsError: null };
    } catch (e) {
        return { results: null, resultsError: e };
    }
};

/**
 * @param {*} results
 * @param {loglevel.Logger} logger
 * @param {function(*)} onSuccess
 */
export const processResults = (results, logger, onSuccess, noEditOutput = false) => {
    if (results === undefined || results === null || results.length < 1) {
        logger.warn('No result found matching provided path');
        onSuccess(null);
    } else {
        // If only one result, unwrap and return it
        if (noEditOutput) {
            onSuccess(results[0]);
        } else {
            onSuccess(results.length === 1 ? results[0] : results);
        }
    }
};
