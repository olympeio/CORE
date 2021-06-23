/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
