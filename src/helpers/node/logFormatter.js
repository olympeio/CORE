/**
 * @param {string} logLevel
 * @param {string} loggerName
 * @param {string} message
 * @return {Object}
 */
export default (logLevel, loggerName, message) => {
    return {level: logLevel.toUpperCase(), loggerName: loggerName, message: message};
};
