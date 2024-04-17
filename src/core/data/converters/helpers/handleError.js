import {ErrorFlow} from 'olympe';
import {getLogger} from 'logging';

/**
 * Helper function to log and throw errors.
 *
 * @param {string} componentName
 * @param {string} message
 * @param {Error=} error
 * @return {ErrorFlow}
 */
export const handleError = (componentName, message, error = null) => {
    const logger = getLogger(componentName);
    logger.error(message);
    if (error) throw ErrorFlow.create(`${message}: ${error.message}`, 1);
};
