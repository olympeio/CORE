/**
 * convertStringToJson function to parse a string format object to a JSON format object
 * If type of objectInput is string, this function will convert it to object type and validate json format
 * This function will throw error if objectInput is invalid
 * It will return a JSON object if objectInput is valid
 *
 * @param {object | string} objectInput
 * @return {object}
 */
export const convertStringToJson = (objectInput, objectName) => {

    const invalidJSONObjectMessage = `${objectName} should be JSON object or string of JSON object`;
    const invalidArrayMessage = `${objectName} should not be an Array`;

    let outputObject = null;
    const typeOfInput = typeof objectInput;

    // Check if empty string first
    if (objectInput === null || typeOfInput === 'string' && objectInput.trim() === '') {
        return {}; // Return an empty JSON object
    }

    if (!objectInput || (typeOfInput !== 'string' && typeOfInput !== 'object')) {
        throw invalidJSONObjectMessage;
    }
    if (typeOfInput === 'object') {
        if (Array.isArray(objectInput)) {
            throw invalidArrayMessage;
        }
        outputObject = objectInput;
    }
    if (typeOfInput === 'string') {
        const convertedJSONInput = JSON.parse(objectInput);
        // If objectInput = '[]'
        if (Array.isArray(convertedJSONInput)) {
            throw invalidArrayMessage;
        }
        // If objectInput = 'null' or objectInput = 'true'
        if (!convertedJSONInput || typeof convertedJSONInput !== 'object') {
            throw invalidJSONObjectMessage;
        }
        outputObject = convertedJSONInput;
    }
    return outputObject;
}
