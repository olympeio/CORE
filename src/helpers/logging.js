/**
 * @file
 *
 * Init loglevel module
 */

import * as log from 'loglevel';
import formatter from 'helpers/logFormatter';
import {Config} from 'olympe';

let loggingInitialised = false;

/**
 * Get a named logger. Initialise logging if this has not been done yet.
 *
 * @param {string} name
 * @return {loglevel.Logger}
 */
export const getLogger = (name) => {
    if (!loggingInitialised) {
        log.setLevel(Config.getParameter('loglevel') || 'info');
        loggingInitialised = true;
    }

    return log.getLogger(name);
}

/**
 * Set up the loggers factory. `formatter` must return a string or Object.
 */
export default () => {
    const defaultFactory = log.methodFactory;
    log.methodFactory = (methodName, logLevel, loggerName) => {
        const rawMethod = defaultFactory(methodName, logLevel, loggerName);
        return (message) => {
            rawMethod(formatter(methodName, loggerName, message));
        };
    };
};
