/**
 * @param {string} logLevel
 * @param {string} loggerName
 * @param {string} message
 * @return {string}
 */
export default (logLevel, loggerName, message) => `${loggerName} ${logLevel} ${message}`;
